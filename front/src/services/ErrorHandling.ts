export const errors = new Map<string, string>([
  ["ANSWER_TOO_HIGH", "Your Guess is too High"],
  ["USERNAME_IS_EMPTY", "Username is empty"],
  ["ANSWER_TOO_LOW", "Your Guess is too Low"],
  ["ANSWER_CORRECT", "Yehhh You Won!!"],
  ["USER_LOSE", "You Lose :("],
  ["GAME_ID_IS_EMPTY", "Game Not Found"],
  ["GAME_ID_IS_NOT_INT", "Game ID must be integer"],
  ["USER_ANSWER_IS_EMPTY", "Input can not be empty"],
  ["USER_ANSWER_IS_NOT_INT", "Input must be integer"],
  ["USER_ANSWER_MORE_THAN_MAX", "Your guess must be less than 200"],
  ["USER_ANSWER_LESS_THAN_MIN", "Your guess must be greater than 0"],
  ["INVALID_TOKEN", "INVALID_TOKEN"],
  ["TOKEN_IS_EMPTY", "TOKEN_IS_EMPTY"],
  ["USERNAME_ALREADY_EXIST", "Username already exist"],
  ["EMAIL_ALREADY_EXIST", "Email already exist"],
  ["InValid_Credentials", "Invalid Credentials"],
  ["USER_NOT_FOUND", "User Not Found"],
  ["PLAY_RECORD_NOT_FOUND", "Play record not found"],
  ["GET_USER_INFO_EVENT", "get-user-info"],
  ["JOIN_ROOM_ON", "join"],
  ["USERNAME_ISNOT_STRING", "Username can not start with numbers"],
  ["USERNAME_TOO_SHORT", "Username must contain three characters"],
  ["USERNAME_TOO_LONG", "The number of characters in my username is too high"],
  ["USERNAME_INVALID_FORMAT", "Username invalid format"],
  ["EMAIL_IS_EMPTY", "Email is empty"],
  ["EMAIL_IS_INVALID", "Email is invalid"],
  ["FULLNAME_IS_EMPTY", "Fullname is Empty"],
  ["FULLNAME_ISNOT_STRING", "Fullname can not start with numbers"],
  ["PASSWORD_IS_EMPTY", "Password is empty"],
  ["PASSWORD_IS_WEAK", "Password is weak"],
  ["CONFIRM_PASSWORD_IS_WEAK", "Confirm Password is weak"],
  ["CONFIRM_PASSWORD_IS_EMPTY", "Confirm Password is empty"],
  ["PASSWORDS_CONFLICT", "Password and confirm password are not the same"],
  ["USERNAME_OR_EMAIL_IS_EMPTY", "Username or Email is empty"],
  ["REDIRECT_LINK_IS_EMPTY", "FORGET password redirect link is empty"],
  ["REDIRECT_LINK_IS_NOT_VALID_URL", "redirect link is not valid"],
  ["INTERNAL_SERVER_ERROR", "Server not respond"],
]);

export function gerErrorMessage(error: string): string {
  const errorssss = errors.get(error);
  if (errorssss != undefined) {
    return errorssss;
  } else return "";
}
