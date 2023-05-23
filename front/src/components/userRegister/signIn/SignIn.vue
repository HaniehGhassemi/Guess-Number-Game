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

<script lang="ts" src="./signIn"></script>

<style lang="scss" src="../UserRegisterStyles.scss"></style>
