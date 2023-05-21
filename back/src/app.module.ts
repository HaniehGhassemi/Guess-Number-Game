import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GlobalModule } from './modules/global/global.module';
import { GuessNumberModule } from './modules/games/guess-number/guess-number.module';
import { UsersModule } from './modules/users/users.module';
import { RedisModule } from '@liaoliaots/nestjs-redis';

@Module({
  imports: [
    RedisModule.forRoot({
      config: {
        host: 'redis',
        port: 6379,
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GlobalModule,
    GuessNumberModule,
    UsersModule,
  ],
})
export class AppModule {}
