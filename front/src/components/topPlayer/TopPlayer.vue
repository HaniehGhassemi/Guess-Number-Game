<template>
  <div class="players-section">
    <div class="top-player-title">
      <h2>Top Player</h2>
    </div>
    <div class="top-players">
      <div class="player" v-for="(player, index) in topPlayers" :key="index">
        <div class="img-section">
          <img
            :src="
              require(`../../assets/images/avatar/${profilePic[index]}.jpg`)
            "
            alt=""
          />
          <div class="topPlayer-score">
            <p class="score">Score: {{ player?.sumScore }}</p>
          </div>
        </div>
        <div class="topPlayer-data">
          <div class="data">
            <p class="full-name">{{ player?.fullName }}</p>
            <p class="userName">@{{ player?.userName }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./TopPlayer.ts"></script>

<style lang="scss" src="./TopPlayer.scss"></style>
