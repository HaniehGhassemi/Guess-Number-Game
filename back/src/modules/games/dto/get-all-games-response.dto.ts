import { ResponseDto } from 'src/common/types/response.dto';
import { getGameDto } from './get-game.dto';

export class getAllGamesResponseDto implements ResponseDto {
  success?: boolean;
  data?: getGameDto[];
}
