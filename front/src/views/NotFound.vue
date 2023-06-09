<template>
  <AppContainer>
    <div class="not-found">
      <h2>404</h2>
      <p>Page Not Found</p>
    </div>
  </AppContainer>
</template>

<script>
import AppContainer from "@/components/base/AppContainer.vue";
("@/components/base/");
export default {
  components: {
    AppContainer,
  },
};
</script>

<style lang="scss">
@import "../assets/fonts/fonts.css";
.not-found {
  height: 100%;
  width: 100%;
  background-color: #f2f5f6;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-family: bold;
    font-size: 10rem;
    color: #4f45e4;
  }
  p {
    font-family: light;
    font-size: 2rem;
    color: #424a57;
  }
}
</style>
