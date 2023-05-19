import { Id } from 'src/common/dto/id-response.dto';
import { ResponseDto } from 'src/common/types/response.dto';

export class SignUpResponseDto implements ResponseDto {
  success: boolean;
  data: Id;
}
