<template>
  <div>
    <AppContainer>
      <h1>Guess number game</h1>
    </AppContainer>
  </div>
</template>

<script lang="ts">
import AppContainer from "@/components/base/AppContainer.vue";
export default {
  name: "Home-Vue",
  components: {
    AppContainer,
  },
};
</script>

<style lang="scss" src="@/styles/index.scss"></style>
