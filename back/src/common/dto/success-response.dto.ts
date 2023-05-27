import { ResponseDto } from '../types/response.dto';

export class SuccessResponseDto implements ResponseDto {
  success: boolean;
}
