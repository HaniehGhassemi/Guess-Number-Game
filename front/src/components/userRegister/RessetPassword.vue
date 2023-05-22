<template>
  <AppContainer>
    <Container>
      <div class="form-section show" id="resetpass-section">
        <h1>Resset Password</h1>
        <p>Please enter your new password</p>
        <input
          v-model="password"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <input
          v-model="repassword"
          type="password"
          name="repassword"
          id="repassword"
          placeholder="Repassword"
        />
        <Buttons></Buttons>
        <br />
        <p id="show-message"></p>
      </div>
    </Container>
  </AppContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import AppContainer from "../base/AppContainer.vue";
import Container from "../container/Container.vue";
import Buttons from "../Buttons/Buttons.vue";
export default defineComponent({
  name: "RessetPassword",
  components: {
    AppContainer,
    Container,
    Buttons,
  },
  data() {
    return {
      password: "",
      repassword: "",
    };
  },
  methods: {
    async ressetPass() {
      const password = this.password;
      const repassword = this.repassword;
      let result = await axios.post("http://localhost:8080/api/users/signin", {
        password: password,
        repassword: repassword,
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
