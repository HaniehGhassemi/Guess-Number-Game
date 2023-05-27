<template>
  <AppContainer>
    <Container>
      <div class="games">
        <div class="logo-container">
          <h1>Guess Number</h1>
          <div style="width: 100%">
            <br /><br />
            <h2>I am thinking of a number Between 0-100<br /></h2>
            <h2>Can you Guess it?</h2>
          </div>
        </div>
        <div class="game-container">
          <input v-model="guess" id="guessinput" type="text" />
          <label id="errorMessage" class="error"></label>
          <Button @click="checkAnswer">Submit</Button>
        </div>
        <div class="show-result">
          <pre class="resultGame" v-if="res != null">
Your Guess is {{ res?.userAnswer }}</pre
          >
          <pre class="resultGame" v-if="res != null">
Remaining Chances {{ res?.chance }}</pre
          >
        </div>
      </div>
    </Container>
  </AppContainer>
</template>

<script lang="ts">
import AppContainer from "@/components/base/AppContainer.vue";
import Container from "@/components/container/Container.vue";
import Button from "@/components/Buttons/Button.vue";
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";
import { getUserInfo } from "@/services/getUserInfo";

export default defineComponent({
  name: "Guess-Number",
  components: {
    AppContainer,
    Container,
    Button,
  },
  data() {
    return {
      start: "start",
    };
  },
  setup() {
    const user = ref();
    const res = ref();
    const guess = ref();
    async function newGame() {
      if (localStorage.getItem("token")) {
        const reqInstance = axios.create({
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const result = await reqInstance.post(
          `${process.env.VUE_APP_BASE_API_URL}/guess-number/new-game`
        );
        console.log(result);
        return result;
      }
    }
    async function checkAnswer() {
      const reqInstance = axios.create({
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const rescheckAnswer = await reqInstance.post(
        `${process.env.VUE_APP_BASE_API_URL}/guess-number/check-answer`,
        {
          gameId: 1,
          userAnswer: +guess.value,
        }
      );
      console.log(rescheckAnswer);

      const {
        data: { data },
      } = rescheckAnswer;

      res.value = data;
    }
    console.log("this is", res);

    onMounted(async () => {
      const {
        data: { data: userInfo },
      } = await getUserInfo();
      user.value = userInfo;
      await newGame();
    });

    return {
      user,
      guess,
      newGame,
      checkAnswer,
      res,
    };
  },
});
</script>

<style lang="scss" src="./GuessNumber.scss"></style>
