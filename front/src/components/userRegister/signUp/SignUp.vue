<template>
  <AppContainer>
    <div class="signUp-section">
      <div class="signUp-title">
        <h2>Sign Up</h2>
      </div>
      <div class="signUp-form">
        <BaseInput
          v-model="fullname"
          type="text"
          placeholder="Full Name"
        ></BaseInput>
        <BaseInput
          v-model="username"
          type="text"
          placeholder="Username"
        ></BaseInput>
        <BaseInput v-model="email" type="email" placeholder="Email"></BaseInput>
        <BaseInput
          v-model="password"
          type="password"
          placeholder="Password"
        ></BaseInput>
        <BaseInput
          v-model="confirmPassword"
          type="password"
          placeholder="Repeat Password"
        ></BaseInput>
      </div>
      <div class="error">
        <p class="signup-error">{{ errorMessage }}</p>
      </div>

      <Button @click="signUp">Submit</Button>
    </div>
  </AppContainer>
</template>

<script lang="ts" src="./signup.ts"></script>

<style lang="scss" src="./SignUp.scss"></style>
