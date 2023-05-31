<template>
  <div class="app-container">
    <div class="box-section">
      <SidebarVue></SidebarVue>
    </div>
    <div class="header"></div>
    <div class="main-container">
      <div class="slider"></div>
      <div class="topplayer"></div>

      <div class="body"></div>
      <div class="body"></div>
      <div class="body"></div>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import SidebarVue from "../sidebar/Sidebar.vue";
export default {
  name: "App-Container",
  components: {
    SidebarVue,
  },
};
</script>

<style lang="scss" src="./AppContainer.scss"></style>
