<template>
  <AppContainer>
    <div class="forgetpass-section">
      <div class="forgetpass-title">
        <p>Enter your email to receive the password recovery link</p>
      </div>
      <div class="forgetpass-form">
        <input
          v-model="email"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
      </div>
      <div class="error">
        <p class="forgetpass-error">{{ errorMessage }}</p>
      </div>
      <Button @click="forgetPass">Submit</Button>
    </div>
  </AppContainer>
</template>

<script lang="ts" src="./forgetPass.ts"></script>

<style lang="scss" src="./ForgetPassword.scss"></style>
