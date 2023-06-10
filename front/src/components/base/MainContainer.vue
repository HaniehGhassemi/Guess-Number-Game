<template>
  <div class="main-container">
    <RightContainer> <slot /></RightContainer>
    <LeftContainer></LeftContainer>
  </div>
</template>

<script lang="ts">
import RightContainer from "@/components/container/RightContainer.vue";
import LeftContainer from "@/components/container/LeftContainer.vue";
export default {
  components: {
    RightContainer,
    LeftContainer,
  },
};
</script>

<style>
.main-container {
  width: 94%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
