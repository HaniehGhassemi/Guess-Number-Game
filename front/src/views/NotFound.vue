<template>
  <AppContainer>
    <MainContainer>
      <div class="not-found">
        <h2>404</h2>
        <p>Page Not Found</p>
      </div>
    </MainContainer>
  </AppContainer>
</template>

<script>
import AppContainer from "@/components/base/AppContainer.vue";
import MainContainer from "@/components/base/MainContainer.vue";
("@/components/base/");
export default {
  components: {
    AppContainer,
    MainContainer,
  },
};
</script>

<style lang="scss">
@import "../assets/fonts/fonts.css";
.not-found {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    font-family: bold;
    font-size: 100px;
    color: #ffff;
  }
  p {
    font-family: light;
    font-size: 50px;
    color: #ffff;
  }
}
</style>
