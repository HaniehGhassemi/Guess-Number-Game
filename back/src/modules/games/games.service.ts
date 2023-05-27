import { Injectable } from '@nestjs/common';
import { PrismaService } from '../global/services/prisma/prisma.service';
import { Game } from '@prisma/client';
import { getAllGamesResponseDto } from './dto/get-all-games-response.dto';
import { getGameDto } from './dto/get-game.dto';

@Injectable()
export class GamesService {
  constructor(private prisma: PrismaService) {}
  async getAllGames(): Promise<getAllGamesResponseDto> {
    const games: getGameDto[] = await this.prisma.client.game.findMany();
    return {
      success: true,
      data: games,
    };
  }
}
