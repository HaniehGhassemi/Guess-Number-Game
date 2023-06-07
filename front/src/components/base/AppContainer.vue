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

export default {
  name: "App-Container",
  components: {
    SidebarVue,
    Header,
    MainContainer,
  },
};
</script>

<style lang="scss" src="./AppContainer.scss"></style>
