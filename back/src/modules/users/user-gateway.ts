import { OnModuleDestroy, OnModuleInit, UseGuards } from '@nestjs/common';
import {
  ConnectedSocket,
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
  users = {};
  @WebSocketServer()
  server: Server;
  onModuleInit() {
    Logger.log('websocket initialized');
  }
  onModuleDestroy() {
    this.clientCounter.reset();
  }
  handleConnection(@ConnectedSocket() client: Socket) {
    // this.clientCounter.inc(1);
    Logger.log(`client ${client.id} connected`);
  }
  handleDisconnect(@ConnectedSocket() client: Socket) {
    // this.clientCounter.dec(1);
    if (this.users.hasOwnProperty(client.handshake.headers.cookie)) {
      --this.users[client.handshake.headers.cookie];
      if (this.users[client.handshake.headers.cookie] == 0) {
        delete this.users[client.handshake.headers.cookie];
      }
      this.clientCounter.set(Object.keys(this.users).length);
    }
    Logger.log('dc', Object.keys(this.users).length);
    Logger.log(`${client.id} disconnected`);
  }

  @UseGuards(WsGuard)
  @SubscribeMessage(UserGateWayConstants.USER_LOGIN)
  async handleJoinEvent(@ConnectedSocket() client: Socket) {
    if (!this.users[client.handshake.headers.cookie])
      this.users[client.handshake.headers.cookie] = 0;
    ++this.users[client.handshake.headers.cookie];
    Logger.log('lg', Object.keys(this.users).length);
    this.clientCounter.set(Object.keys(this.users).length);
    Logger.log(`login event recived`);
  }
  @UseGuards(WsGuard)
  @SubscribeMessage(UserGateWayConstants.GET_USER_INFO)
  async handleGetUserInfoEvent() {
    Logger.log('get user info event recived');
  }
  @OnEvent(UserGateWayConstants.SEND_USER_INFO_EVENT)
  listentToEvent(msg: GetUserInfo) {
    this.server
      .to(msg.data.userId.toString())
      .emit(UserGateWayConstants.RES_USER_INFO_EVENT, msg);
  }
}
