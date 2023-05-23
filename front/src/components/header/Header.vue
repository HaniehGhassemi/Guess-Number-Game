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
            <p id="userFullname"></p>
            &nbsp;&nbsp;
          </div>
          <img
            id="img-profile"
            class="profile-circle"
            src="@/assets/images/profile-pic.jpg"
            alt=""
          />
          <div class="dropdown-content">
            <div class="dropdown-item" title="Score">
              <span
                ><i class="fa-solid fa-star" style="color: #c0c0c0"></i
              ></span>
              <span id="userScore"></span>
            </div>
            <div class="dropdown-item" title="Rank">
              <span
                ><i class="fa-solid fa-medal" style="color: #c0c0c0"></i
              ></span>
              <span id="userRank"></span>
            </div>
            <div class="dropdown-item" title="Number of times played">
              <span
                ><i class="fa-solid fa-rotate-right" style="color: #c0c0c0"></i
              ></span>
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
import { defineComponent } from "vue";
export default defineComponent({
  name: "Header-vue",
});
</script>

<style lang="scss" src="./Header.scss"></style>
