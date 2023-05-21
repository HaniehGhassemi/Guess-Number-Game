import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { SignUpDto } from './dto/sign-up.dto';
import { UsersService } from './users.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpResponseDto } from './dto/sign-up-response.dto';
import { SignInResponseDto } from './dto/sign-in-response.dto';
import { GetUserInfo } from './dto/get-user-info-response.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post('signup')
  signUp(@Body() signUpDto: SignUpDto): Promise<SignUpResponseDto> {
    return this.userService.signUp(signUpDto);
  }

  @Post('signin')
  signIn(@Body() signInDto: SignInDto): Promise<SignInResponseDto> {
    return this.userService.signIn(signInDto);
  }

  @Get('user-info')
  @UseGuards(AuthGuard())
  getUserInfo(@Req() req): Promise<GetUserInfo> {
    return this.userService.getUserInfo(req.user.userId);
  }
}
