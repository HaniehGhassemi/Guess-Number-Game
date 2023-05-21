import { ResponseDto } from 'src/common/types/response.dto';

export class GetUserInfo implements ResponseDto {
  success?: boolean;
  data?: userInfo;
}

export class userInfo {
  userId: number;
  userName: string;
  fullName: string;
  sumScore: number;
  playCount: number;
  rank: number;
}
