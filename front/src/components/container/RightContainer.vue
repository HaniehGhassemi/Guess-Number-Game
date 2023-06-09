<template>
  <div class="right-container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "Container-box",
  components: {},
};
</script>

<style lang="scss">
.right-container {
  width: 69%;
  height: 98%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
}
</style>
