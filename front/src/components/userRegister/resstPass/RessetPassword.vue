<template>
  <AppContainer>
    <div class="ressetpass-section">
      <div class="ressetpass-title">
        <h1>Resset Password</h1>
        <p>Please enter your new password</p>
      </div>
      <BaseInput
        v-model="newPassword"
        type="password"
        placeholder="Password"
      ></BaseInput>
      <BaseInput
        v-model="confirmNewPassword"
        type="password"
        placeholder="Confrim Password"
      ></BaseInput>
      <div class="error">
        <p class="ressetpass-error">{{ errorMessage }}</p>
      </div>

      <Button @click="ressetPass">Submit</Button>
    </div>
  </AppContainer>
</template>

<script lang="ts" src="./ressetPass.ts"></script>

<style lang="scss" src="./RessetPassword.scss"></style>
