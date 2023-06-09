import { IsNotEmpty, IsEmail, IsUrl } from 'class-validator';
import { UserServiceValidationError } from '../types/user-service-validation-errors.enum';
export class requestForgetPassDto {
  @IsEmail({}, { message: UserServiceValidationError.EMAIL_IS_INVALID })
  @IsNotEmpty({ message: UserServiceValidationError.EMAIL_IS_EMPTY })
  email: string;
  @IsNotEmpty({
    message: UserServiceValidationError.REDIRECT_LINK_IS_EMPTY,
  })
  redirectLink: string;
}
