import { ResponseDto } from 'src/common/types/response.dto';
import { GameSession } from '../types/game-session.interface';

export class newGameResponseDto implements ResponseDto {
  success: boolean;
  data: GameSession;
}
