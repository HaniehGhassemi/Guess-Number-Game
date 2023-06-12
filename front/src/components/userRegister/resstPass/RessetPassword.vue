<template>
  <AppContainer>
    <div class="ressetpass-section">
      <div class="ressetpass-title">
        <h1>Resset Password</h1>
        <p>Please enter your new password</p>
      </div>
      <div class="ressetpass-form">
        <input
          v-model="newPassword"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <input
          v-model="confirmNewPassword"
          type="password"
          name="repassword"
          id="repassword"
          placeholder="Repassword"
        />
      </div>
      <div class="error">
        <p class="ressetpass-error">{{ errorMessage }}</p>
      </div>

      <Button @click="ressetPass">Submit</Button>
    </div>
  </AppContainer>
</template>

<script lang="ts" src="./ressetPass.ts"></script>

<style lang="scss" src="./RessetPassword.scss"></style>
