import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { GetUserInfo } from './dto/get-user-info-response.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @ApiBearerAuth()
  @Get('get-user-info')
  @UseGuards(AuthGuard())
  getUserInfo(@Req() req): Promise<GetUserInfo> {
    return this.userService.getUserInfo(req.user.userId);
  }

  @Get('get-top-players/')
  getTopPlayers(@Query('count') count: string) {
    return this.userService.getTopPlayers(+count);
  }
}
