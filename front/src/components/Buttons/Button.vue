<template>
  <button class="buttons" v-bidn="$attrs">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: "Button-app",
};
</script>

<style lang="scss" src="./Button.scss"></style>
