import { Controller, Body, Post, Query, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpResponseDto } from './dto/sign-up-response.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInResponseDto } from './dto/sign-in-response.dto';
import { SignInDto } from './dto/sign-in.dto';
import { requestForgetPassDto } from './dto/request-forget-pass.dto';
import { ResponseDto } from 'src/common/types/response.dto';
import { RequestResetPassDto } from './dto/request-reset-pass.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signUp(@Body() signUpDto: SignUpDto): Promise<SignUpResponseDto> {
    return this.authService.signUp(signUpDto);
  }

  @Post('signin')
  signIn(@Body() signInDto: SignInDto): Promise<SignInResponseDto> {
    return this.authService.signIn(signInDto);
  }

  @Post('forget/request')
  requestResetPass(
    @Body() requestDto: requestForgetPassDto,
  ): Promise<ResponseDto> {
    return this.authService.requestForgetPass(requestDto);
  }

  @Get('forget/verify')
  verifyForgetPassLink(@Query('token') token: string): Promise<ResponseDto> {
    return this.authService.verifyForgetPassToken(token);
  }

  @Post('forget/reset')
  async resetPassword(@Body() resetPasswordDto: RequestResetPassDto) {
    return this.authService.resetPassword(resetPasswordDto);
  }
}
