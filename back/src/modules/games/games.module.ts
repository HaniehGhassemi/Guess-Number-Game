import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { PrismaService } from '../global/services/prisma/prisma.service';

@Module({
  providers: [GamesService, PrismaService],
  controllers: [GamesController]
})
export class GamesModule {}
