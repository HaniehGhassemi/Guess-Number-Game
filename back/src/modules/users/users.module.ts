import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from '../global/services/prisma/prisma.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/common/utils/jwt.strategy';
import { MailingModule } from '../mailing/mailing.module';
import { MailingService } from '../mailing/mailing.service';
import { UserGateWay } from './user-gateway';
import { makeGaugeProvider } from '@willsoto/nestjs-prometheus';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: {
        expiresIn: '1d',
      },
    }),
    MailingModule,
  ],
  controllers: [AuthController, UsersController],
  providers: [
    AuthService,
    UsersService,
    PrismaService,
    JwtStrategy,
    MailingService,
    UserGateWay,
    makeGaugeProvider({
      name: 'user_loggined',
      help: 'user_loggined_help',
    })
  ],
})
export class UsersModule {}
