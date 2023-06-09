<template>
  <AppContainer>
    <div class="signUp-section">
      <div class="signUp-title">
        <h2>Sign Up</h2>
      </div>
      <div class="signUp-form">
        <input
          v-model="fullname"
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
          v-model="confirmPassword"
          type="password"
          name="re-password"
          id="re-password"
          placeholder="Repeat Password"
        />
        <p class="signUp-error">{{ errorMessage }}</p>
        <Button @click="signUp">Sign Up</Button>
      </div>
    </div>
  </AppContainer>
</template>

<script lang="ts" src="./signup.ts"></script>

<style lang="scss" src="./SignUp.scss"></style>
