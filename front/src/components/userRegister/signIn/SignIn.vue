<template>
  <AppContainer>
    <div class="signin-section">
      <div class="signin-title">
        <h1>Sign In</h1>
      </div>
      <div class="signin-form">
        <input
          v-model="usernameOrEmail"
          name="signData"
          type="text"
          placeholder="Username or Email"
        />
        <input
          v-model="password"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
      </div>
      <div class="error">
        <p class="signin-error">{{ errorMessage }}</p>
      </div>
      <Button @click="signIn">Sign In</Button>
      <a href="/forget-pass"
        ><span data-id="resetpass-section">Forgot Password?</span></a
      >
    </div>
  </AppContainer>
</template>

<script lang="ts" src="./signIn"></script>

<style lang="scss" src="./Signin.scss"></style>
