<template>
  <div class="sidebar-container">
    <div class="sidebar-section">
      <span class="selection">
        <a href="#" class="navigation"
          ><fa class="icons" icon="fa-solid fa-house" />Home</a
        ></span
      >
      <span class="selection"
        ><a href="#" class="navigation"
          ><fa class="icons" icon="fa-solid fa-medal" />Top Player</a
        ></span
      >
      <span class="selection">
        <a href="#" class="navigation"
          ><fa class="icons" icon="fa-solid fa-cart-shopping" />Cart</a
        ></span
      >
      <div class="setting-section">
        <span class="selection">
          <a href="#" class="navigation"
            ><fa icon="fa-solid fa-gear" />Setting</a
          ></span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Sidebar-vue",
};
</script>

<style lang="scss" src="./Sidebar.scss"></style>
