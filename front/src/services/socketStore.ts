import { defineStore } from "pinia";

export const useSocketStore = defineStore("socketStore", {
  state: () => ({
    socket: {
      s: null,
    },
  }),
  actions: {
    save(mySocket: any) {
      this.socket.s = mySocket;
    },
  },
  getters: {
    getSocket(): any {
      return this.socket.s;
    },
  },
});
