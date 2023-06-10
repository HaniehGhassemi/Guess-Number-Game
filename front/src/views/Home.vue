<template>
  <AppContainer> <SlideShow></SlideShow> <TopPlayer></TopPlayer> </AppContainer>
</template>

<script lang="ts">
import AppContainer from "@/components/base/AppContainer.vue";
import SlideShow from "@/components/slideShow/SlideShow.vue";
import TopPlayer from "@/components/topPlayer/TopPlayer.vue";

export default {
  name: "Home-Vue",
  components: {
    AppContainer,
    TopPlayer,
    SlideShow,
  },
};
</script>

<style lang="scss" src="@/styles/index.scss"></style>
