import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from 'src/modules/global/services/prisma/prisma.service';
import { JwtTokenPayload } from 'src/modules/users/types/jwt-token-payload.interface';
import { userErrors } from 'src/modules/users/types/user-errors.enum';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private prisma: PrismaService) {
    super({
      secretOrKey: process.env.JWT_SECRET_KEY,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: JwtTokenPayload) {
    const { userId } = payload;
    const user = await this.prisma.client.user.findFirst({
      where: {
        uid: userId,
      },
    });
    if (!user) throw new UnauthorizedException(userErrors.InValid_Credentials);

    return {
      fullname: user.fullname,
      userId: user.uid,
    };
  }
}
