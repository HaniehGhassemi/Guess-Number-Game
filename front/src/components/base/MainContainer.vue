<template>
  <div class="main-container">
    <div class="content-section">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  components: {},
};
</script>

<style>
.main-container {
  width: 100%;
  height: 96%;
  border-radius: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 2%;
  padding-left: 2%;
}
.content-section {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
