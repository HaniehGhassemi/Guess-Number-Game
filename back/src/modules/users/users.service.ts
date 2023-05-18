import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../global/services/prisma/prisma.service';
import { SignUpDto } from './dto/sign-up.dto';
import { userErrors } from './types/user-errors.enum';
import * as bcrypt from 'bcrypt';
import { SignUpResponseDto } from './dto/sign-up-response.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async signUp(signUpDto: SignUpDto): Promise<SignUpResponseDto> {
    const { username, email, password, fullname } = signUpDto;
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
    const hashedPassword = await bcrypt.hash(password, salt);
    const createdUser = await this.prisma.client.user.create({
      data: {
        username,
        email,
        fullname,
        password: hashedPassword,
      },
    });

    return {
      success: true,
      data: {
        id: createdUser.uid,
      },
    };
  }
}
