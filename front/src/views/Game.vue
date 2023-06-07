<template>
  <AppContainer>
    <Container>
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
  </AppContainer>
</template>

<script lang="ts">
import AppContainer from "../components/base/AppContainer.vue";
import Button from "@/components/Buttons/Button.vue";
import { getUserInfo } from "@/services/getUserInfo";
import { defineComponent, ref, onMounted } from "vue";
import Container from "@/components/container/Container.vue";

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
