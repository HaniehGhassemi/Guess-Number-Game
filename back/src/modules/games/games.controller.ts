import { Controller, Get } from '@nestjs/common';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
  constructor(private gamesService: GamesService) {}
  @Get('all')
  async getAllGames() {
    return this.gamesService.getAllGames();
  }
}
