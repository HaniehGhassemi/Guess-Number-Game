import { OnModuleInit, UseGuards } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common/services';
import { UserGateWayConstants } from './types/user-gateway.enum';
import { WsGuard } from 'src/common/utils/wsGuard';
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
    Logger.log(`client ${client.id} connected`);
  }
  handleDisconnect(client: Socket) {
    Logger.log(`${client.id} disconnected`);
  }

  @UseGuards(WsGuard)
  @SubscribeMessage('join')
  async handleEvent(
    @MessageBody() room: string,
    @ConnectedSocket() client: Socket,
  ) {
    //room here will be the userId
    //each user is added to a room
    client.join(room.toString());
  }

  emitUserInfo(userId: string, userInfo: string) {
    this.server
      .to(userId.toString())
      .emit(UserGateWayConstants.GET_USER_INFO_EVENT, userInfo);
  }
}
