import { ApiProperty } from '@nestjs/swagger';

export class JwtTokenResponse {
  @ApiProperty()
  token: string;
}
