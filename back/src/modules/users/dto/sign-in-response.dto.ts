import { ResponseDto } from 'src/common/types/response.dto';
import { JwtTokenResponse } from '../types/jwt-token-response.interface';

export class SignInResponseDto implements ResponseDto {
  success: boolean;
  data: JwtTokenResponse;
}
