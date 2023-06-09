<template>
  <div class="app-container">
    <SidebarVue></SidebarVue>
    <div class="box-section">
      <Header></Header>
      <MainContainer>
        <slot></slot>
      </MainContainer>
    </div>
  </div>
</template>

<script lang="ts">
import SidebarVue from "../sidebar/Sidebar.vue";
import Header from "../header/Header.vue";
import MainContainer from "./MainContainer.vue";
import { socketHandler } from "@/services/userInfo";
import { onMounted } from "vue";

export default {
  name: "App-Container",
  components: {
    SidebarVue,
    Header,
    MainContainer,
  },
  setup() {
    function connectWebSocket() {
      const token = localStorage.getItem("token");
      if (token) {
        const socketInstance = new socketHandler(token);
        socketInstance.socket.connect();
        socketInstance.socket.emit("login", null);
      }
    }
    onMounted(() => {
      connectWebSocket();
    });

    return {
      connectWebSocket,
    };
  },
};
</script>

<style lang="scss" src="./AppContainer.scss"></style>
