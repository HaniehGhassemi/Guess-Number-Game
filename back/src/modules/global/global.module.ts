import { Module } from '@nestjs/common';
import { PrismaService } from './services/prisma/prisma.service';

@Module({
  providers: [PrismaService],
})
export class GlobalModule {}
