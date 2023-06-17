<template>
  <AppContainer>
    <div class="forgetpass-section">
      <div class="forgetpass-title">
        <p>Enter your email to receive the password recovery link</p>
      </div>
      <BaseInput v-model="email" type="email" placeholder="Email"></BaseInput>
      <div class="error">
        <p class="forgetpass-error">{{ errorMessage }}</p>
      </div>
      <Button @click="forgetPass">Submit</Button>
    </div>
  </AppContainer>
</template>

<script lang="ts" src="./forgetPass.ts"></script>

<style lang="scss" src="./ForgetPassword.scss"></style>
