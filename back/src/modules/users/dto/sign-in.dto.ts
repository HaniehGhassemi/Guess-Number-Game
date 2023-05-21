import { IsNotEmpty } from 'class-validator';
import { UserServiceValidationError } from '../types/user-service-validation-errors.enum';
export class SignInDto {
  @IsNotEmpty({
    message: UserServiceValidationError.USERNAME_OR_EMAIL_IS_EMPTY,
  })
  usernameOrEmail: string;
  @IsNotEmpty({ message: UserServiceValidationError.PASSWORD_IS_EMPTY })
  password: string;
}
