import { Module } from '@nestjs/common';
import { GuessNumberController } from './guess-number.controller';
import { GuessNumberService } from './guess-number.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/common/utils/jwt.strategy';
import { PrismaService } from 'src/modules/global/services/prisma/prisma.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: {
        expiresIn: 3600,
      },
    }),
  ],
  controllers: [GuessNumberController],
  providers: [GuessNumberService, JwtStrategy, PrismaService],
})
export class GuessNumberModule {}
