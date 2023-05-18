import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from '../global/services/prisma/prisma.service';

@Module({
  controllers: [AuthController, UsersController],
  providers: [AuthService, UsersService, PrismaService],
})
export class UsersModule {}
