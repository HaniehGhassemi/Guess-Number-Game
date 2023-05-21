import { ResponseDto } from 'src/common/types/response.dto';

export class GetUserInfo implements ResponseDto {
  success?: boolean;
  data?: {
    userId: number;
    userName: string;
    fullName: string;
    sumScore: number;
    playCount: number;
    rank: number;
  };
}
