import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Logger } from '@nestjs/common';
import { Socket } from 'socket.io';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { UsersService } from 'src/modules/users/users.service';
import { UserGateWayConstants } from 'src/modules/users/types/user-gateway.enum';
@Injectable()
export class WsGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
    private eventEmitter: EventEmitter2,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const client: Socket = context.switchToWs().getClient<Socket>();
    const token = this.extractTokenFromHeader(client);
    Logger.log(token);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET_KEY,
      });
      //each user is added to a specific room
      client.join(payload.userId.toString());
      Logger.log(`${client.id} connected to room ${payload.userId}`);
      //send user info
      const userInfo = await this.userService.getUserInfo(+payload.userId);
      this.eventEmitter.emitAsync(
        UserGateWayConstants.SEND_USER_INFO_EVENT,
        userInfo,
      );
      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlers
      context.switchToHttp().getRequest().user = payload;
    } catch (err) {
      throw new UnauthorizedException(err);
    }
    return true;
  }

  private extractTokenFromHeader(client: Socket): string | undefined {
    const token = client.handshake.headers?.authorization?.split(' ')[1];
    return token;
  }
}
