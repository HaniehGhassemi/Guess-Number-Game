import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { GuessNumberService } from './guess-number.service';
import { AuthGuard } from '@nestjs/passport';
import { CheckAnswerDto } from './dto/check-answer.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('guess-number')
export class GuessNumberController {
  constructor(private guessNumberService: GuessNumberService) {}
  @ApiBearerAuth()
  @Post('new-game')
  @UseGuards(AuthGuard())
  newGame(@Req() req) {
    return this.guessNumberService.newGame(req.user.userId);
  }
  @ApiBearerAuth()
  @Post('check-answer')
  @UseGuards(AuthGuard())
  checkAnswer(@Req() req, @Body() checkAnswerDto: CheckAnswerDto) {
    return this.guessNumberService.checkAnswer(checkAnswerDto, req.user.userId);
  }
}
