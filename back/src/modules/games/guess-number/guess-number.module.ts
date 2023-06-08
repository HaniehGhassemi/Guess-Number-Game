import { Module } from '@nestjs/common';
import { GuessNumberController } from './guess-number.controller';
import { GuessNumberService } from './guess-number.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/common/utils/jwt.strategy';
import { PrismaService } from 'src/modules/global/services/prisma/prisma.service';
import { UserGateWay } from 'src/modules/users/user-gateway';
import { UsersService } from 'src/modules/users/users.service';
import { makeGaugeProvider } from '@willsoto/nestjs-prometheus';

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
  providers: [
    GuessNumberService,
    JwtStrategy,
    PrismaService,
    UserGateWay,
    UsersService,
    makeGaugeProvider({
      name: 'user_loggined',
      help: 'user_loggined_help',
    })
  ],
})
export class GuessNumberModule {}
