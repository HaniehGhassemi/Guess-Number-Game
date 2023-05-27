import {
  Controller,
  Body,
  Post,
  Query,
  Get,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpResponseDto } from './dto/sign-up-response.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInResponseDto } from './dto/sign-in-response.dto';
import { SignInDto } from './dto/sign-in.dto';
import { requestForgetPassDto } from './dto/request-forget-pass.dto';
import { RequestResetPassDto } from './dto/request-reset-pass.dto';
import { AuthGuard } from '@nestjs/passport';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { SuccessResponseDto } from 'src/common/dto/success-response.dto';
import { VerifyTokenResponseDto } from './dto/verify-token-response.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

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
  ): Promise<SuccessResponseDto> {
    return this.authService.requestForgetPass(requestDto);
  }

  @Get('forget/verify')
  verifyForgetPassLink(
    @Query('token') token: string,
  ): Promise<VerifyTokenResponseDto> {
    return this.authService.verifyForgetPassToken(token);
  }

  @Post('forget/reset')
  async resetPasswordByLink(
    @Body() resetPasswordDto: RequestResetPassDto,
  ): Promise<SuccessResponseDto> {
    return this.authService.resetPasswordByLink(resetPasswordDto);
  }
  @ApiBearerAuth()
  @Post('reset-password')
  @UseGuards(AuthGuard())
  async resetPassword(
    @Body() resetPasswordDto: ResetPasswordDto,
    @Req() req,
  ): Promise<SuccessResponseDto> {
    return this.authService.resetPassword(resetPasswordDto, req.user.userId);
  }
}
