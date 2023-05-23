<template>
  <AppContainer>
    <container>
      <div class="form-section">
        <h1>Sign Up</h1>
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
        <button @click="signUp" id="sign-up-btn" class="primary-btn">
          Sign Up
        </button>
      </div>
    </container>
  </AppContainer>
</template>

<script lang="ts" src="./signup.ts"></script>

<style lang="scss" src="../UserRegisterStyles.scss"></style>
