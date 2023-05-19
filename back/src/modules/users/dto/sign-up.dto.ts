import {
  IsNotEmpty,
  IsEmail,
  IsStrongPassword,
  IsString,
  MinLength,
  MaxLength,
} from 'class-validator';
import { Compare } from 'src/modules/global/decorators/compare.decorator';
import { UserServiceValidationError } from '../types/user-service-validation-errors.enum';
export class SignUpDto {
  @IsNotEmpty({ message: UserServiceValidationError.USERNAME_IS_EMPTY })
  @IsString({ message: UserServiceValidationError.USERNAME_ISNOT_STRING })
  @MinLength(3, { message: UserServiceValidationError.USERNAME_TOO_SHORT })
  @MaxLength(20, { message: UserServiceValidationError.USERNAME_TOO_LONG })
  username: string;
  @IsNotEmpty({ message: UserServiceValidationError.EMAIL_IS_EMPTY })
  @IsEmail({}, { message: UserServiceValidationError.EMAIL_IS_INVALID })
  email: string;
  @IsNotEmpty({ message: UserServiceValidationError.FULLNAME_IS_EMPTY })
  @IsString({ message: UserServiceValidationError.FULLNAME_ISNOT_STRING })
  fullname: string;
  @IsNotEmpty({ message: UserServiceValidationError.PASSWORD_IS_EMPTY })
  @IsStrongPassword(
    {},
    {
      message: UserServiceValidationError.PASSWORD_IS_WEAK,
    },
  )
  password: string;
  @IsNotEmpty({ message: UserServiceValidationError.CONFIRM_PASSWORD_IS_EMPTY })
  @IsStrongPassword(
    {},
    {
      message: UserServiceValidationError.CONFIRM_PASSWORD_IS_WEAK,
    },
  )
  @Compare('password', {
    message: UserServiceValidationError.PASSWORDS_CONFLICT,
  })
  confirmPassword: string;
}
