<template>
  <AppContainer>
    <div
      class="game-section"
      v-if="res != undefined && res?.randomNumber == null"
    >
      <div class="game-title">
        <div style="width: 100%">
          <h2>I am thinking of a number Between 0-100</h2>
          <span style="--i: 1">Can&nbsp;</span>
          <span style="--i: 2">You&nbsp;</span>
          <span style="--i: 3">Guess&nbsp;</span>
          <span style="--i: 4">it?</span>
        </div>
      </div>
      <BaseInput
        v-model.number="guess"
        type="number"
        placeholder="Guess Me!"
      ></BaseInput>

      <Button @click="checkAnswer">Submit</Button>
      <div class="game-result">
        <pre class="answer-result" v-if="errorMessage">{{ errorMessage }}</pre>
        <pre class="answer-result" v-if="res?.userAnswer != undefined">
  Your Guess is {{ res?.userAnswer }}</pre
        >
        <pre class="answer-result" v-if="res?.chance != null">
  Remaining Chances {{ res?.chance }}</pre
        >
      </div>
    </div>
    <div class="game-section" v-else>
      <div class="game-result" style="height: 38%">
        <div class="game-result-info">
          <pre
            class="answer-result">{{ errorMessage }}<br> The Number was {{res?.randomNumber}}</pre>
          <pre class="answer-result">Do you want to play again?</pre>
        </div>

        <div class="play-agian">
          <Button><a href="/guess-number">Yes</a></Button>
          <Button><a href="/">No</a></Button>
        </div>
      </div>
    </div>
  </AppContainer>
</template>

<script lang="ts">
import AppContainer from "@/components/base/AppContainer.vue";
import Button from "@/components/Buttons/Button.vue";
import BaseInput from "@/components/input/BaseInput.vue";
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";
import { getUserInfo } from "@/services/getUserInfo";
import router from "@/router";
import { gerErrorMessage } from "@/services/ErrorHandling";

export default defineComponent({
  name: "Guess-Number",
  components: {
    AppContainer,
    Button,
    BaseInput,
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
    const errorMessage = ref("");

    async function newGame() {
      try {
        if (localStorage.getItem("token")) {
          const reqInstance = axios.create({
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          const result = await reqInstance.post(
            `${process.env.VUE_APP_BASE_API_URL}/guess-number/new-game`
          );
          const {
            data: { data },
          } = result;
          res.value = data;
        } else {
          router.push({ name: "SignIn" });
        }
      } catch (error: any) {
        const message: string = Array.isArray(error.response.data.data.message)
          ? error.response.data.data.message[0]
          : error.response.data.data.message;
        const errr: string = gerErrorMessage(message);
        errorMessage.value = errr;
      }
    }
    async function checkAnswer() {
      try {
        if (localStorage.getItem("token")) {
          const reqInstance = axios.create({
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          const rescheckAnswer = await reqInstance.post(
            `${process.env.VUE_APP_BASE_API_URL}/guess-number/check-answer`,
            {
              gameId: 1,
              userAnswer: guess.value,
            }
          );
          const {
            data: { data },
          } = rescheckAnswer;
          const message: string = rescheckAnswer.data.data.message;
          const errr: string = gerErrorMessage(message);
          errorMessage.value = errr;
          res.value = data;
        } else {
          router.push({ name: "SignIn" });
        }
      } catch (error: any) {
        const message: string = Array.isArray(error.response.data.data.message)
          ? error.response.data.data.message[0]
          : error.response.data.data.message;
        const errr: string = gerErrorMessage(message);
        errorMessage.value = errr;
      }
    }
    onMounted(async () => {
      const {
        data: { data: userInfo },
      } = await getUserInfo();
      user.value = userInfo;
      await newGame();
    });
    console.log("/ghghgh////////////////////////////////", guess.value);

    return {
      user,
      guess,
      checkAnswer,
      res,
      newGame,
      errorMessage,
    };
  },
});
</script>

<style lang="scss" src="./GuessNumber.scss"></style>
