<template>
  <header>
    <div class="header-items-sections">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <div class="header-title">
        <h1>Guess Number Game</h1>
      </div>

      <div class="header-icons">
        <div class="dropdown" v-if="user == null">
          <span class="material-symbols-rounded"> login </span>
          <div class="dropdown-content">
            <a href="/sign-up">Sign up</a>
            <a href="/sign-in">Sign in</a>
          </div>
        </div>
        <div class="dropdown" v-else>
          <span class="material-symbols-rounded"> person </span>
          <div class="dropdown-content">
            <button @click="changePass">change Password</button>
            <button @click="logOut">Log Out</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { getUserInfo } from "@/services/getUserInfo";
import { useRouter } from "vue-router";
import router from "@/router";

export default defineComponent({
  name: "Header-vue",
  setup() {
    const user = ref();
    const route = useRouter();
    function logOut() {
      localStorage.removeItem("token");
      router.push({ path: "/", query: { logout: "logout" } });
      route.go(0);
    }
    function changePass() {
      router.push({ name: "RessetPassword" });
    }
    onMounted(async () => {
      const {
        data: { data: userInfo },
      } = await getUserInfo();
      user.value = userInfo;
    });
    return {
      user,
      logOut,
      changePass,
    };
  },
});
</script>

<style lang="scss" src="./Header.scss"></style>
