import {
  ForbiddenException,
  Injectable,
  NotFoundException,
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
import { UsersService } from './users.service';
import { addDays } from 'src/common/utils/date-time.utils';
import { MailingService } from '../mailing/mailing.service';
import { requestForgetPassDto } from './dto/request-forget-pass.dto';
import { randomBytes } from 'crypto';
import { AuthErrors } from './types/auth-errors.enum';
import { RequestResetPassDto } from './dto/request-reset-pass.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { SuccessResponseDto } from 'src/common/dto/success-response.dto';
import { VerifyTokenResponseDto } from './dto/verify-token-response.dto';
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
    private userService: UsersService,
    private mailingService: MailingService,
  ) {}

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

  async requestForgetPass(
    requestDto: requestForgetPassDto,
  ): Promise<SuccessResponseDto> {
    let { email } = requestDto;
    email = email.trim().toLowerCase();
    //check user exist by email
    const user = await this.userService.findUserByEmail(email);
    if (!user) throw new NotFoundException(userErrors.USER_NOT_FOUND);

    //generate toekn
    const token = randomBytes(16).toString('hex');
    const expiry = addDays(new Date().toString(), 2);
    //save token in database
    await this.prisma.client.emailVerification.create({
      data: {
        email: email,
        expiry: expiry,
        token: token,
      },
    });
    //send email
    await this.mailingService.sendUserConfirmation(
      user,
      token,
      requestDto.redirectLink,
    );
    return {
      success: true,
    };
  }

  async verifyForgetPassToken(token: string): Promise<VerifyTokenResponseDto> {
    const verifyToken = await this.prisma.client.emailVerification.findFirst({
      where: {
        token,
      },
    });

    //check verifyToken and its expiry
    if (!verifyToken || verifyToken.expiry < new Date())
      throw new UnauthorizedException(AuthErrors.INVALID_TOKEN);

    return {
      success: true,
      data: {
        token,
      },
    };
  }

  async resetPasswordByLink(
    resetPasswordDto: RequestResetPassDto,
  ): Promise<SuccessResponseDto> {
    // validate token
    const verifyToken = await this.prisma.client.emailVerification.findFirst({
      where: {
        token: resetPasswordDto.token,
      },
    });
    if (!verifyToken || verifyToken.expiry < new Date())
      throw new UnauthorizedException(AuthErrors.INVALID_TOKEN);
    // update user's password
    const salt = await bcrypt.genSalt();
    await this.prisma.client.user.update({
      where: {
        email: verifyToken.email,
      },
      data: {
        password: await bcrypt.hash(resetPasswordDto.newPassword, salt),
      },
    });

    //expire token
    await this.prisma.client.emailVerification.update({
      where: {
        id: verifyToken.id,
      },
      data: {
        expiry: new Date(0),
      },
    });
    return {
      success: true,
    };
  }

  async resetPassword(
    resetPasswordDto: ResetPasswordDto,
    userId: number,
  ): Promise<SuccessResponseDto> {
    const user = await this.userService.findUserById(userId);
    if (!user) throw new NotFoundException(userErrors.USER_NOT_FOUND);
    const salt = await bcrypt.genSalt();
    await this.prisma.client.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: await bcrypt.hash(resetPasswordDto.newPassword, salt),
      },
    });

    return {
      success: true,
    }
  }
}
