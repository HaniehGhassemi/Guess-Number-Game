<template>
  <AppContainer>
    <Container>
      <div class="form-section show" id="resetpass-section">
        <h1>Resset Password</h1>
        <p>Please enter your new password</p>
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
        <Button @click="ressetPass">Submit</Button>
        <br />
        <p id="show-message"></p>
      </div>
    </Container>
  </AppContainer>
</template>

<script lang="ts" src="./ressetPass.ts"></script>

<style lang="scss" src="../UserRegisterStyles.scss"></style>
