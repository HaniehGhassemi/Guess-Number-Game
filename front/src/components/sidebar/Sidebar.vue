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
          <button @click="redirectUser">
            <span class="material-symbols-rounded"> stadia_controller </span>
          </button>
        </li>
        <li>
          <a
            href="https://miro.com/welcomeonboard/SkZKaDhhRml5UVIySW9vZnBIUjRYcEhMcnBaaGtjUk1nRFlQNU42ZERjZUk5bmN1RW8zWW11azlKOHRoOThRTXwzNDU4NzY0NTQ0MjY2ODUzMzQyfDI=?share_link_id=113508448300"
            target="_blank"
          >
            <span class="material-symbols-rounded"> account_tree </span>
          </a>
        </li>
        <li>
          <button @click="sendtoast">
            <span class="material-symbols-rounded"> settings </span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import router from "@/router";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default defineComponent({
  name: "Sidebar-vue",
  setup() {
    async function redirectUser() {
      if (localStorage.getItem("token")) {
        router.push({ name: "Guess-Number" });
      } else {
        console.log("mishe vli nsode");
        router.push({ name: "SignIn" });
      }
    }
    function sendtoast() {
      toast.success("This feature will be added soon.", {
        autoClose: 2000,
      });
    }
    return {
      redirectUser,
      sendtoast,
    };
  },
});
</script>

<style lang="scss" src="./Sidebar.scss"></style>
