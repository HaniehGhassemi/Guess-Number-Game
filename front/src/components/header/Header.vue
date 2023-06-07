<template>
  <header>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0"
    />
    <h1>Guess Number Game</h1>
    <div class="header-icons">
      <a href="#">
        <span class="material-symbols-rounded"> search </span>
      </a>
      <a href="#">
        <span class="material-symbols-rounded"> favorite </span>
      </a>
      <a href="#">
        <span class="material-symbols-rounded"> person </span>
      </a>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header-vue",
});
</script>

<style lang="scss" src="./Header.scss"></style>
