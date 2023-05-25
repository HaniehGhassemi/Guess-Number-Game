<template>
  <AppContainer>
    <Container>
      <div class="form-section">
        <h1>Sign IN</h1>
        <input
          v-model="signInData"
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
        <a href="/forget-pass"
          ><span data-id="resetpass-section">Forgot Password?</span></a
        >
        <Button @click="signIn">Sign in</Button>
      </div>
    </Container>
  </AppContainer>
</template>

<script lang="ts" src="./signIn"></script>

<style lang="scss" src="../UserRegisterStyles.scss"></style>
