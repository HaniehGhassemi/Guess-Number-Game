import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtTokenPayload } from './types/jwt-token-payload.interface';
import { JwtTokenResponse } from './types/jwt-token-response.interface';
import { userErrors } from './types/user-errors.enum';
import { PrismaService } from '../global/services/prisma/prisma.service';
import { SignUpResponseDto } from './dto/sign-up-response.dto';
import { SignUpDto } from './dto/sign-up.dto';
import * as bcrypt from 'bcrypt';
import { SignInDto } from './dto/sign-in.dto';
import { SignInResponseDto } from './dto/sign-in-response.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private prisma: PrismaService) {}

  async generateToken(playload: JwtTokenPayload): Promise<JwtTokenResponse> {
    const token = await this.jwtService.sign(playload);
    return { token };
  }

  async signUp(signUpDto: SignUpDto): Promise<SignUpResponseDto> {
    let { username, email } = signUpDto;
    username = username.trim().toLocaleLowerCase();
    email = email.trim().toLocaleLowerCase();
    //if username exist
    const isUsernameExist = await this.prisma.client.user.count({
      where: {
        username: username,
      },
    });
    if (isUsernameExist)
      throw new ForbiddenException(userErrors.USERNAME_ALREADY_EXIST);
    //if email exist
    const isEmailExist = await this.prisma.client.user.count({
      where: {
        email: email,
      },
    });
    if (isEmailExist)
      throw new ForbiddenException(userErrors.EMAIL_ALREADY_EXIST);
    //create user
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(signUpDto.password, salt);
    const createdUser = await this.prisma.client.user.create({
      data: {
        username,
        email,
        fullname: signUpDto.fullname,
        password: hashedPassword,
      },
    });

    return {
      success: true,
      data: {
        id: createdUser.id,
      },
    };
  }

  async signIn(signInDto: SignInDto): Promise<SignInResponseDto> {
    const usernameOrEmail = signInDto.usernameOrEmail
      .trim()
      .toLocaleLowerCase();
    //check user credentioals
    const user = await this.prisma.client.user.findFirst({
      where: {
        OR: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
      },
    });
    //return jwt token if credentioals is valid
    if (user && (await bcrypt.compare(signInDto.password, user.password))) {
      const token = await this.generateToken({ userId: user.id });
      return { success: true, data: token };
    }
    throw new UnauthorizedException(userErrors.InValid_Credentials);
  }
}
