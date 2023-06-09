import { io } from "socket.io-client";

export class socketHandler {
  isConnect = false;
  socket: any;
  URL = "http://localhost:8080";
  constructor(token: string) {
    this.socket = io(this.URL, {
      autoConnect: false,
      extraHeaders: {
        authorization: `Bearer ${token}`,
      },
    });

    this.socket.on("connect", () => {
      this.isConnect = true;
      console.log("connect");
    });

    this.socket.on("disconnect", () => {
      this.isConnect = false;
      console.log("disconnect");
    });
  }
}
