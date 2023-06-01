import { OnModuleInit } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';
import { UsersService } from './users.service';
@WebSocketGateway({
  cors: true,
})
export class UserGateWay
  implements OnModuleInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private userService: UsersService) {}
  @WebSocketServer()
  server: Server;
  onModuleInit() {
    Logger.log('websocket initialized');
  }

  async handleConnection(client: Socket) {
    //room here will be the userId
    //each user is added to a room
    client.on('join', function (room: string) {
      client.join(room);
      Logger.log(`${client.id} connected to room: ${room}`);
    });
  }
  handleDisconnect(client: Socket) {
    Logger.log(`${client.id} disconnected`);
  }

  emitUserInfo(userId: string, userInfo: string) {
    this.server.to(userId).emit('get-user-info', userInfo);
  }
}
