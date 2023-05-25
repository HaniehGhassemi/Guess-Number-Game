<template>
  <header>
    <div class="header-container">
      <div class="logo-section w-10">
        <img
          id="img-logo"
          class="logo"
          src="@/assets/images/pslogo.png"
          alt=""
        />
      </div>
      <div class="w-50">
        <ul class="menu-nav">
          <li class="underline-active">
            <a href="/">Home</a>
          </li>
          <li class="underline-active">
            <a href="">Scoreboard</a>
          </li>
        </ul>
      </div>
      <div class="profile-section w-50">
        <div class="user-menu-section">
          <div class="username">
            <p id="userFullname" v-if="user != null">
              {{ user.fullName }}
            </p>
            <a id="userFullname" v-else href="/sign-in">Log in</a>
            &nbsp;&nbsp;
          </div>
          <img
            id="img-profile"
            class="profile-circle"
            src="@/assets/images/profile-pic.jpg"
            alt=""
          />
          <div class="dropdown-content" v-if="user != null">
            <div class="dropdown-item" title="Score">
              <span id="userRank"
                ><i
                  ><fa
                    class="fa"
                    icon="fa-solid fa-star"
                    style="color: #ffffff"
                  />{{ user.sumScore }}</i
                ></span
              >
            </div>
            <div class="dropdown-item" title="Rank">
              <span
                ><i
                  ><fa class="fa" icon="fa-solid fa-medal" />{{ user.rank }}</i
                ></span
              >
            </div>
            <div class="dropdown-item" title="Number of times played">
              <span id="userRank"
                ><i
                  ><fa
                    class="fa"
                    icon="fa-solid fa-rotate-right"
                    style="color: #ffffff"
                  />{{ user.playCount }}</i
                ></span
              >
              <span id="userPlayCount"></span>
            </div>
            <a href="/resset-pass">Change Password</a>
            <a id="logout" href="#">Logout</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { getUserInfo } from "@/services/getUserInfo";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "Header-vue",

  setup() {
    const user = ref();
    onMounted(async () => {
      const {
        data: { data: userInfo },
      } = await getUserInfo();
      user.value = userInfo;
    });

    return {
      user,
    };
  },
});
</script>

<style lang="scss" src="./Header.scss"></style>
