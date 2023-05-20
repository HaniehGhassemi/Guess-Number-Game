import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { GuessNumberService } from './guess-number.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('guess-number')
export class GuessNumberController {
  constructor(private guessNumberService: GuessNumberService) {}
  @Post('new-game')
  @UseGuards(AuthGuard())
  newGame(@Req() req) {
    return this.guessNumberService.newGame(req.user.userId);
  }
}
