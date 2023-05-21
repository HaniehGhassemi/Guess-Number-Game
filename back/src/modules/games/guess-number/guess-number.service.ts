import { InjectRedis } from '@liaoliaots/nestjs-redis';
import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { GameSession } from './types/game-session.interface';
import { newGameResponseDto } from './dto/new-game-response.dto';
import { SaveScoreDto } from './dto/save-score.dto';
import { PrismaService } from 'src/modules/global/services/prisma/prisma.service';
import { CheckAnswerDto } from './dto/check-answer.dto';
import { checkAnswerResponseDto } from './dto/check-answer-response.dto';
import { guessNumberMessages } from './types/guess-number-messages.enum';

@Injectable()
export class GuessNumberService {
  constructor(
    @InjectRedis() private readonly redis: Redis,
    private prisma: PrismaService,
  ) {}
  async newGame(userId: string): Promise<newGameResponseDto> {
    //check if session already exist
    const existedGameSession = await this.getGameSession(userId);
    if (existedGameSession)
      return {
        success: true,
        data: JSON.parse(existedGameSession),
      };
    //create new game session
    const gameSession: GameSession = {
      chance: 5,
      randomNumber: +(Math.random() * 100).toFixed(0),
    };
    const serilazedGameSession: string = JSON.stringify(gameSession);
    await this.redis.set(userId, serilazedGameSession);
    return {
      success: true,
      data: gameSession,
    };
  }

  async checkAnswer(
    checkAnswerDto: CheckAnswerDto,
    userId: string,
  ): Promise<checkAnswerResponseDto> {
    //get game session
    const gameSession: GameSession = JSON.parse(
      await this.getGameSession(userId),
    );
    //check if user won
    if (checkAnswerDto.userAnswer === gameSession.randomNumber) {
      const score = this.calculateScore(gameSession.chance);
      await this.saveScore({
        gameId: checkAnswerDto.gameId,
        userId: +userId,
        score,
      });
      //delete session
      await this.deleteGameSession(userId);
      return {
        success: true,
        data: {
          message: guessNumberMessages.ANSWER_CORRECT,
          randomNumber: gameSession.randomNumber,
        },
      };
    }
    gameSession.chance--;
    gameSession.userAnswer = checkAnswerDto.userAnswer;
    // if user lose , delete session otherwise save session
    if (gameSession.chance == 0) await this.deleteGameSession(userId);
    else await this.redis.set(userId, JSON.stringify(gameSession));
    return {
      success: true,
      data: {
        chance: gameSession.chance,
        userAnswer: gameSession.userAnswer,
        message:
          gameSession.chance == 0
            ? guessNumberMessages.USER_LOSE
            : checkAnswerDto.userAnswer < gameSession.randomNumber
            ? guessNumberMessages.ANSWER_TOO_LOW
            : guessNumberMessages.ANSWER_TOO_HIGH,
      },
    };
  }

  private async getGameSession(userId: string) {
    return await this.redis.get(userId);
  }
  private async deleteGameSession(userId: string) {
    return await this.redis.del(userId);
  }
  private calculateScore(chance: number): number {
    return chance * 10;
  }

  private async saveScore(saveScoreDto: SaveScoreDto): Promise<void> {
    await this.prisma.client.play.create({
      data: {
        userId: saveScoreDto.userId,
        gameId: saveScoreDto.gameId,
        score: saveScoreDto.score,
      },
    });
  }
}
