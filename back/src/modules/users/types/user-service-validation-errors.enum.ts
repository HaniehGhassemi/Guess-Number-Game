export enum UserServiceValidationError {
  USERNAME_IS_EMPTY = 'USERNAME_IS_EMPTY',
  USERNAME_ISNOT_STRING = 'USERNAME_ISNOT_STRING',
  USERNAME_TOO_SHORT = 'USERNAME_TOO_SHORT',
  USERNAME_TOO_LONG = 'USERNAME_TOO_LONG',
  EMAIL_IS_EMPTY = 'EMAIL_IS_EMPTY',
  EMAIL_IS_INVALID = 'EMAIL_IS_INVALID',
  FULLNAME_IS_EMPTY = 'FULLNAME_IS_EMPTY',
  FULLNAME_ISNOT_STRING = 'FULLNAME_ISNOT_STRING',
  PASSWORD_IS_EMPTY = 'PASSWORD_IS_EMPTY',
  PASSWORD_IS_WEAK = 'PASSWORD_IS_WEAK',
  CONFIRM_PASSWORD_IS_WEAK = 'CONFIRM_PASSWORD_IS_WEAK',
  CONFIRM_PASSWORD_IS_EMPTY = 'CONFIRM_PASSWORD_IS_EMPTY',
  PASSWORDS_CONFLICT = 'PASSWORDS_CONFLICT',
}
