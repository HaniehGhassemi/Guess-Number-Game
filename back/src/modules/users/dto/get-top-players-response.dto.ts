import { ResponseDto } from 'src/common/types/response.dto';
import { userInfo } from './get-user-info-response.dto';

export class GetTopPlayersDto implements ResponseDto {
  success?: boolean;
  data?: userInfo[];
}
