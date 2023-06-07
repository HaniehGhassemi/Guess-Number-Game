<template>
  <div class="sidebar">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0"
    />
    <div class="menu">
      <ul class="list-style">
        <li>
          <a href="/">
            <span class="material-symbols-rounded"> home </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="material-symbols-rounded"> stadia_controller </span>
          </a>
        </li>
        <li>
          <a href="#" @click="redirectUser">
            <span class="material-symbols-rounded"> workspace_premium </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="material-symbols-rounded"> account_tree </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="material-symbols-rounded"> settings </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { getUserInfo } from "@/services/getUserInfo";

export default defineComponent({
  name: "Sidebar-vue",
  setup() {
    const user = ref();
    async function redirectUser() {
      let routes = [];
      if (user.value != null) {
        routes = [{ path: "/guess-number" }];
      }
      routes = [{ path: "/user-register" }];
    }

    onMounted(async () => {
      const {
        data: { data: userInfo },
      } = await getUserInfo();
      user.value = userInfo;
    });
    return {
      user,
      redirectUser,
    };
  },
});
</script>

<style lang="scss" src="./Sidebar.scss"></style>
