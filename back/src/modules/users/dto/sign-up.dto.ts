import {
  IsNotEmpty,
  IsEmail,
  IsStrongPassword,
  IsString,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';
import { Compare } from 'src/modules/global/decorators/compare.decorator';
import { UserServiceValidationError } from '../types/user-service-validation-errors.enum';
export class SignUpDto {
  @MinLength(3, { message: UserServiceValidationError.USERNAME_TOO_SHORT })
  @MaxLength(20, { message: UserServiceValidationError.USERNAME_TOO_LONG })
  @Matches(new RegExp('^[A-Za-z][A-Za-z0-9_]+$'),{
    message: UserServiceValidationError.USERNAME_INVALID_FORMAT,
  })
  @IsString({ message: UserServiceValidationError.USERNAME_ISNOT_STRING })
  @IsNotEmpty({ message: UserServiceValidationError.USERNAME_IS_EMPTY })
  username: string;
  @IsEmail({}, { message: UserServiceValidationError.EMAIL_IS_INVALID })
  @IsNotEmpty({ message: UserServiceValidationError.EMAIL_IS_EMPTY })
  email: string;
  @IsString({ message: UserServiceValidationError.FULLNAME_ISNOT_STRING })
  @IsNotEmpty({ message: UserServiceValidationError.FULLNAME_IS_EMPTY })
  fullname: string;
  @IsStrongPassword(
    {},
    {
      message: UserServiceValidationError.PASSWORD_IS_WEAK,
    },
  )
  @IsNotEmpty({ message: UserServiceValidationError.PASSWORD_IS_EMPTY })
  password: string;

  @Compare('password', {
    message: UserServiceValidationError.PASSWORDS_CONFLICT,
  })
  @IsStrongPassword(
    {},
    {
      message: UserServiceValidationError.CONFIRM_PASSWORD_IS_WEAK,
    },
  )
  @IsNotEmpty({ message: UserServiceValidationError.CONFIRM_PASSWORD_IS_EMPTY })
  confirmPassword: string;
}
