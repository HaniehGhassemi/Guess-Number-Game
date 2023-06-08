<template>
  <AppContainer>
    <Container>
      <div class="signin-section">
        <div class="signin-title">
          <h1>Sign in</h1>
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
          <p class="signin-error">{{ errorMessage }}</p>
        </div>
        <Button @click="signIn">Sign in</Button>
        <a href="/forget-pass"
          ><span data-id="resetpass-section">Forgot Password?</span></a
        >
      </div>
    </Container>
  </AppContainer>
</template>

<script lang="ts" src="./signIn"></script>

<style lang="scss" src="./Signin.scss"></style>
