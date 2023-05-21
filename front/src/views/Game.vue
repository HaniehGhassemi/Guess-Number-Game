<template>
  <div>
    <AppContainer>
      <Container>
        <div id="games" style="display: none">
          <div class="logo-container">
            <h1>Guess Number</h1>
            <div style="width: 100%">
              <br /><br />
              <h2>I am thinking of a number Between 0-100<br /></h2>
              <h2>Can you Guess it?</h2>
            </div>
          </div>
          <div class="game-container">
            <form id="form" class="user-input">
              <input id="guessinput" type="text" />
              <label id="errorMessage" class="error"></label>
              <button class="buttons" type="submit" id="submit">submit</button>
            </form>
          </div>
        </div>
        <Buttons></Buttons>
      </Container>
    </AppContainer>
  </div>
</template>

<script lang="ts">
import AppContainer from "../components/base/AppContainer.vue";
import Container from "../components/container/Container.vue";
import Buttons from "../components/Buttons/Buttons.vue";
export default {
  name: "Guess-Number-Game",
  components: {
    AppContainer,
    Container,
    Buttons,
  },
};
</script>

<style lang="scss" src="../styles/Game.scss"></style>
