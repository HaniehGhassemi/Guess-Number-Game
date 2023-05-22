<template>
  <AppContainer>
    <Container>
      <div class="form-section">
        <h1>Sign IN</h1>
        <input
          v-model="signInData"
          type="text"
          name="signData"
          id="signData"
          placeholder="Username or Email"
        />
        <input
          v-model="password"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <!-- <button @click="signIn" id="sign-up-btn" class="primary-btn">
          Sign In
        </button> -->
        <Buttons @Click="() => signIn"></Buttons>
      </div>
    </Container>
  </AppContainer>
</template>

<script lang="ts">
import AppContainer from "../base/AppContainer.vue";
import Container from "../container/Container.vue";
import { defineComponent } from "vue";
import axios from "axios";
import Buttons from "../Buttons/Buttons.vue";

export default defineComponent({
  name: "SignIn",
  components: {
    AppContainer,
    Container,
    Buttons,
  },
  data() {
    return {
      signInData: "",
      password: "",
    };
  },
  methods: {
    async signIn() {
      const signInData = this.signInData;
      const password = this.password;
      let result = await axios.post("", {
        username: signInData,
        password: password,
      });
      console.log(result);
      if (result.status == 201) {
        this.$router.push({ name: "Home" });
      }
    },
  },
});
</script>

<style lang="scss" src="./UserRegisterStyles.scss"></style>
