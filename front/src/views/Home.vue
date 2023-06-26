<template>
  <AppContainer> <SlideShow></SlideShow> <TopPlayer></TopPlayer> </AppContainer>
</template>

<script lang="ts">
import AppContainer from "@/components/base/AppContainer.vue";
import SlideShow from "@/components/slideShow/SlideShow.vue";
import TopPlayer from "@/components/topPlayer/TopPlayer.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  name: "Home-Vue",
  components: {
    AppContainer,
    TopPlayer,
    SlideShow,
  },
  setup() {
    const route = useRoute();
    onMounted(async () => {
      if (route.query.logout) {
        toast.success("You logout, I hope See u agian :(", {
          autoClose: 3000,
        });
      }
    });
  },
};
</script>

<style lang="scss" src="@/styles/index.scss"></style>
