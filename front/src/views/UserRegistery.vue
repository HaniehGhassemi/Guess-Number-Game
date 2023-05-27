<template>
  <AppContainer>
    <Container>
      <div class="register">
        <div class="event-btns">
          <Button><a href="/sign-in">Sign in</a></Button>
          <Button><a href="/sign-up">Sign up</a></Button>
        </div>
      </div>
    </Container>
  </AppContainer>
</template>

<script>
import AppContainer from "@/components/base/AppContainer.vue";
import Container from "@/components/container/Container.vue";
import Button from "@/components/Buttons/Button.vue";
export default {
  name: "user-registery",
  components: {
    AppContainer,
    Container,
    Button,
  },
};
</script>

<style lang="scss" src="../styles/Game.scss"></style>
