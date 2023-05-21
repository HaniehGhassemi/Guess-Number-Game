import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtTokenPayload } from './types/jwt-token-payload.interface';
import { JwtTokenResponse } from './types/jwt-token-response.interface';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async generateToken(playload: JwtTokenPayload): Promise<JwtTokenResponse> {
    const token = await this.jwtService.sign(playload);
    return { token };
  }
}
