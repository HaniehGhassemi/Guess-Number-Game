import { IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';
import { UserServiceValidationError } from '../types/user-service-validation-errors.enum';
import { Compare } from 'src/modules/global/decorators/compare.decorator';
import { AuthErrors } from '../types/auth-errors.enum';

export class RequestResetPassDto {
  @IsStrongPassword(
    {},
    {
      message: UserServiceValidationError.PASSWORD_IS_WEAK,
    },
  )
  @IsNotEmpty({ message: UserServiceValidationError.PASSWORD_IS_EMPTY })
  newPassword: string;
  @Compare('newPassword', {
    message: UserServiceValidationError.PASSWORDS_CONFLICT,
  })
  @IsStrongPassword(
    {},
    {
      message: UserServiceValidationError.CONFIRM_PASSWORD_IS_WEAK,
    },
  )
  @IsNotEmpty({ message: UserServiceValidationError.CONFIRM_PASSWORD_IS_EMPTY })
  confirmNewPassword: string;
  @IsNotEmpty({ message: AuthErrors.TOKEN_IS_EMPTY })
  token: string;
}
