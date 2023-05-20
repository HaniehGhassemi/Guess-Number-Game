import { InjectRedis } from '@liaoliaots/nestjs-redis';
import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { GameSession } from './types/game-session.interface';
import { newGameResponseDto } from './dto/new-game-response.dto';

@Injectable()
export class GuessNumberService {
  constructor(@InjectRedis() private readonly redis: Redis) {}
  async newGame(userId: string): Promise<newGameResponseDto> {
    //check if session already exist
    const existedGameSession = await this.redis.get(userId);
    if (existedGameSession)
      return {
        success: true,
        data: JSON.parse(existedGameSession),
      };
    //create new game session
    const randomNumber = +(Math.random() * 100).toFixed(0);
    const chance = 5;
    const gameSession: GameSession = {
      chance,
      randomNumber,
    };
    const serilazedGameSession = JSON.stringify(gameSession);
    await this.redis.del(userId);
    await this.redis.set(userId, serilazedGameSession);
    return {
      success: true,
      data: gameSession,
    };
  }
}
