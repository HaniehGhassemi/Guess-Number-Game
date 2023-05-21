<template>
  <div>
    <AppContainer>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quasi
      rem! Placeat, corporis reiciendis autem provident sunt eum explicabo,
      molestias laudantium, obcaecati debitis repellat fuga id perferendis
      dolore iure ex.
      <div class="gameEvent"></div>
      <Buttons></Buttons>
    </AppContainer>
  </div>
</template>

<script lang="ts">
import AppContainer from "../components/base/AppContainer.vue";
import Buttons from "../components/Buttons/Buttons.vue";
export default {
  name: "Guess-Number-Game",
  components: {
    AppContainer,
    Buttons,
  },
};
</script>

<style lang="scss" src="../styles/Game.scss"></style>
