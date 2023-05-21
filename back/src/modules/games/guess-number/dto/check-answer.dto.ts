import { IsNotEmpty, Max, Min, IsInt } from 'class-validator';
import { guessNumberValidationErrors } from '../types/guess-number-validation-errors.enum';

export class CheckAnswerDto {

  @IsInt({
    message: guessNumberValidationErrors.GAME_ID_IS_NOT_INT,
  })
  @IsNotEmpty({
    message: guessNumberValidationErrors.GAME_ID_IS_EMPTY,
  })
  gameId: number;

  @Min(0, {
    message: guessNumberValidationErrors.USER_ANSWER_LESS_THAN_MIN,
  })
  @Max(100, {
    message: guessNumberValidationErrors.USER_ANSWER_MORE_THAN_MAX,
  })
  @IsInt({
    message: guessNumberValidationErrors.USER_ANSWER_IS_NOT_INT,
  })
  @IsNotEmpty({
    message: guessNumberValidationErrors.USER_ANSWER_IS_EMPTY,
  })
  userAnswer: number;
}
