<template>
  <AppContainer>
    <Container>
      <div class="form-section" id="resetpass-section">
        <p>Enter your email to receive the password recovery link</p>
        <input
          v-model="email"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        <Buttons></Buttons>
        <p id="show-message"></p>
      </div>
    </Container>
  </AppContainer>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";
import AppContainer from "../base/AppContainer.vue";
import Container from "../container/Container.vue";
import Buttons from "../Buttons/Buttons.vue";
export default defineComponent({
  name: "ForgetPass",
  components: {
    AppContainer,
    Container,
    Buttons,
  },
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async forgetPass() {
      const email = this.email;
      let result = await axios.post("", {
        email: email,
      });
      console.log(result);
    },
  },
});
</script>

<style lang="scss" src="./UserRegisterStyles.scss"></style>
