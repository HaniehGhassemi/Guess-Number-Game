import { ResponseDto } from 'src/common/types/response.dto';

export class VerifyTokenResponseDto implements ResponseDto {
  success: boolean;
  data: {
    token: string;
  };
}
