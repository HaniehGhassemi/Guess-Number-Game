import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GlobalModule } from './modules/global/global.module';
import { GameModule } from './modules/game/game.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GlobalModule,
    GameModule,
  ],
})
export class AppModule {}
