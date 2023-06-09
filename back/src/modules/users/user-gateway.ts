import { OnModuleDestroy, OnModuleInit, UseGuards } from '@nestjs/common';
import {
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
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import { Gauge } from 'prom-client';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { GetUserInfo } from './dto/get-user-info-response.dto';
@WebSocketGateway({
  cors: {
    origin: 'http://localhost:8081',
    allowedHeaders: ['authorization'],
    credentials: true,
  },
})
export class UserGateWay
  implements
    OnModuleInit,
    OnGatewayConnection,
    OnGatewayDisconnect,
    OnModuleDestroy
{
  constructor(
    @InjectMetric('connected_client_websocket')
    public clientCounter: Gauge<string>,
  ) {}
  @WebSocketServer()
  server: Server;
  onModuleInit() {
    Logger.log('websocket initialized');
  }
  onModuleDestroy() {
    this.clientCounter.reset();
  }
  handleConnection(client: Socket) {
    this.clientCounter.inc(1);
    Logger.log(`client ${client.id} connected`);
  }
  handleDisconnect(client: Socket) {
    this.clientCounter.dec(1);
    Logger.log(`${client.id} disconnected`);
  }

  @UseGuards(WsGuard)
  @SubscribeMessage(UserGateWayConstants.USER_LOGIN)
  async handleJoinEvent() {
    Logger.log(`login event recived`);
  }
  @OnEvent(UserGateWayConstants.SEND_USER_INFO_EVENT)
  listentToEvent(msg: GetUserInfo) {
    this.server
      .to(msg.data.userId.toString())
      .emit(UserGateWayConstants.RES_USER_INFO_EVENT, msg);
  }
}
