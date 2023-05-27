<template>
  <div>
    <AppContainer>
      <div class="showOption">
        <div class="signinFirst">
          <Button><a href="/user-register">Be our user!</a></Button
          ><br /><br /><br /><br />
          <Button><a href="/start-game">Play our Game!</a></Button>
        </div>
      </div>
    </AppContainer>
  </div>
</template>

<script lang="ts">
import AppContainer from "@/components/base/AppContainer.vue";
import Button from "@/components/Buttons/Button.vue";
export default {
  name: "Home-Vue",
  components: {
    AppContainer,
    Button,
  },
};
</script>

<style lang="scss" src="@/styles/index.scss"></style>
