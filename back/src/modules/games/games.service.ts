import { Injectable } from '@nestjs/common';
import { PrismaService } from '../global/services/prisma/prisma.service';
import { Game } from '@prisma/client';

@Injectable()
export class GamesService {
  constructor(private prisma: PrismaService) {}
  async getAllGames(): Promise<Game[]> {
    return this.prisma.client.game.findMany();
  }
}
