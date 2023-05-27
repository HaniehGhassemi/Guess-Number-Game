import { ApiProperty } from '@nestjs/swagger';

export class GameSession {
  @ApiProperty()
  randomNumber?: number;
  @ApiProperty()
  chance: number;
  @ApiProperty()
  userAnswer?: number;
}
