import { io } from "socket.io-client";

export class socketHandler {
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
      console.log("connect");
    });

    this.socket.on("disconnect", () => {
      console.log("disconnect");
    });
  }
}
