import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GlobalModule } from './modules/global/global.module';
import { GuessNumberModule } from './modules/games/guess-number/guess-number.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GlobalModule,
    GuessNumberModule,
    UsersModule,
  ],
})
export class AppModule {}
