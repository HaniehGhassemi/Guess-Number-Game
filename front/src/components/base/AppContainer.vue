<template>
  <div class="app-container">
    <Header> </Header>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Header from "@/components/header/Header.vue";
export default {
  name: "App-Container",
  components: {
    Header,
  },
};
</script>

<style lang="scss" src="./AppContainer.scss"></style>
