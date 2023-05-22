<template>
  <header>
    <div class="header-container">
      <div class="logo-section w-10">
        <img
          id="img-logo"
          class="logo"
          src="@/assets/images/pslogo.png"
          alt=""
        />
      </div>
      <div class="w-50">
        <ul class="menu-nav">
          <li class="underline-active">
            <a href="./../../index.html">Home</a>
          </li>
          <li class="underline-active">
            <a href="./../../index.html#topPlayerSection">Scoreboard</a>
          </li>
        </ul>
      </div>
      <div class="profile-section w-50"></div>
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
