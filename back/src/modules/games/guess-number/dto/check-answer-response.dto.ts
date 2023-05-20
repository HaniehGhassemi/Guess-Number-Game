import { ResponseDto } from 'src/common/types/response.dto';

export class checkAnswerResponseDto implements ResponseDto {
  success: boolean;
  data: {
    chance?: number;
    randomNumber?: number;
    userAnswer?: number;
    message: string;
  };
}
