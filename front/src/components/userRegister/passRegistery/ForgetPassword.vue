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

<script lang="ts" src="./forgetPass.ts"></script>

<style lang="scss" src="../UserRegisterStyles.scss"></style>
