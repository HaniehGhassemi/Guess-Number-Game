import {
  IsNotEmpty,
  IsEmail,
  IsStrongPassword,
  Matches,
} from 'class-validator';
import { Compare } from 'src/modules/global/decorators/compare.decorator';
export class SignUpDto {
  @IsNotEmpty()
  @Matches('^[A-Za-z][A-Za-z0-9_]{3,20}$')
  username: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  fullname: string;
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
  @IsNotEmpty()
  @IsStrongPassword()
  @Compare('password')
  confirmPassword: string;
}
