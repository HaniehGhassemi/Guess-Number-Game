<template>
  <AppContainer>
    <container>
      <div class="form-section">
        <h1>Sign Up</h1>
        <input
          v-model="name"
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
        />
        <input
          v-model="username"
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        />
        <input
          v-model="email"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
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
          name="re-password"
          id="re-password"
          placeholder="Repeat Password"
        />
        <button @click="signUp" id="sign-up-btn" class="primary-btn">
          Sign Up
        </button>
      </div>
    </container>
  </AppContainer>
</template>

<script lang="ts">
import AppContainer from "../base/AppContainer.vue";
import Container from "../container/Container.vue";
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  components: {
    AppContainer,
    Container,
  },
  data() {
    return {
      name: "",
      username: "",
      email: "",
      password: "",
      repassword: "",
    };
  },
  methods: {
    async signUp() {
      const name = this.name;
      const username = this.username;
      const email = this.email;
      const password = this.password;
      const repassword = this.repassword;
      // console.warn("signup", name, username, email, password, repassword);
      let result = await axios.post("", {
        name: name,
        username: username,
        email: email,
        password: password,
        repassword: repassword,
      });
      console.log(result);
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "Home" });
      }
    },
  },
});
</script>

<style lang="scss" src="./UserRegister.scss"></style>
