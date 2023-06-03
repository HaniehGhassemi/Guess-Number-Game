import { OnModuleInit } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';
import { UserGateWayConstants } from './types/user-gateway.enum';
@WebSocketGateway({
  cors: true,
})
export class UserGateWay
  implements OnModuleInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;
  onModuleInit() {
    Logger.log('websocket initialized');
  }

  async handleConnection(client: Socket) {
    //room here will be the userId
    //each user is added to a room
    client.on(UserGateWayConstants.JOIN_ROOM_ON, function (room: string) {
      client.join(room);
      Logger.log(`${client.id} connected to room: ${room}`);
    });
  }
  handleDisconnect(client: Socket) {
    Logger.log(`${client.id} disconnected`);
  }

  emitUserInfo(userId: string, userInfo: string) {
    this.server
      .to(userId)
      .emit(UserGateWayConstants.GET_USER_INFO_EVENT, userInfo);
  }
}
