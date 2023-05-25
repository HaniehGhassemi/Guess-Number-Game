<template>
  <AppContainer>
    <Container v-if="user != null">
      <div class="gameEvent" id="gameEvent">
        <div class="event-content">
          <h1 id="headline">Do you want play?</h1>
          <p id="message1"></p>
        </div>
        <div class="event-content">
          <Button><a href="/guess-number">Lets Go!</a></Button>
          <Button><a href="/">Exit</a></Button>
        </div>
      </div>
    </Container>
    <container v-else>
      <div class="register">
        <p>Please Sign In first</p>
        <div class="event-btns">
          <Button><a href="/sign-in">Sign in</a></Button>
          <Button><a href="/sign-up">Sign up</a></Button>
        </div>
      </div>
    </container>
  </AppContainer>
</template>

<script lang="ts">
import AppContainer from "../components/base/AppContainer.vue";
import Container from "../components/container/Container.vue";
import Button from "@/components/Buttons/Button.vue";
import { getUserInfo } from "@/services/getUserInfo";

import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "Start-Game",
  components: {
    AppContainer,
    Container,
    Button,
  },
  setup() {
    const user = ref();
    onMounted(async () => {
      const {
        data: { data: userInfo },
      } = await getUserInfo();
      user.value = userInfo;
    });
    return {
      user,
    };
  },
});
</script>

<style lang="scss" src="../styles/Game.scss"></style>
