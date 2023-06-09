<template>
  <div class="left-container">
    <div class="none-profile-section" v-if="user == null">
      <p>
        You are not our user yet :(<br />
        Press&nbsp;
        <span class="material-symbols-rounded"> login </span>
        &nbsp; to join our users!
      </p>
    </div>
    <div class="profile-section" v-else>
      <div class="img-section">
        <img
          :src="require(`../../assets/images/avatar/${randomPic}.jpg`)"
          alt=""
        />
        <h3>{{ user?.data.fullName }}</h3>
        <p>@{{ user?.data.userName }}</p>
      </div>
      <div class="user-data">
        <table>
          <tr>
            <th>Rank</th>
            <th>Score</th>
            <th>Replay</th>
          </tr>
          <tr>
            <td>{{ user?.data.rank }}</td>
            <td>{{ user?.data.sumScore }}</td>
            <td>{{ user?.data.playCount }}</td>
          </tr>
        </table>
        <p>
          press&nbsp;
          <span class="material-symbols-rounded"> stadia_controller </span>
          &nbsp;icon and Increase your score
        </p>
      </div>
    </div>
    <div class="news-title">
      <h2>News</h2>
    </div>
    <div class="news-sections">
      <div class="new">
        <img src="@/assets/images/news/new-sjd.jpg" alt="" />
      </div>
      <div class="new">
        <img src="@/assets/images/news/new-hni.jpg" alt="" />
      </div>
      <div class="new">
        <img src="@/assets/images/news/new-avatars.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
import { socketHandler } from "@/services/userInfo";
import { useSocketStore } from "@/services/socketStore";
export default {
  name: "Container-box",
  components: {},

  setup() {
    const user = ref();
    const store = useSocketStore();
    async function connectWebSocket() {
      const existSocket = store.getSocket;
      let socketInstance = null;
      const token = localStorage.getItem("token");
      if (token) {
        if (!existSocket) {
          socketInstance = new socketHandler(token);
          store.save(socketInstance);
        } else socketInstance = existSocket;
        if (!socketInstance.isConnect) {
          socketInstance.socket.connect();
          socketInstance.socket.emit("login", null);
        }
        socketInstance.socket.emit("get-user-info", null);
        socketInstance.socket.on("res-user-info", (args: any) => {
          console.log(args);
          user.value = args;
          console.log("test2", user);
        });
      }
    }
    console.log("test1", user);

    const profilePic = [
      "pro-1",
      "pro-2",
      "pro-3",
      "pro-4",
      "pro-5",
      "pro-6",
      "pro-7",
      "pro-8",
      "pro-9",
      "pro-10",
      "pro-11",
      "pro-12",
    ];
    const random = Math.floor(Math.random() * profilePic.length);
    const randomPic = profilePic[random];
    onMounted(async () => {
      await connectWebSocket();
    });
    return {
      user,
      randomPic,
      connectWebSocket,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/fonts/fonts.css";

.left-container {
  width: 28%;
  height: 98%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
}

.profile-section {
  width: 100%;
  height: 50%;
  background-color: #f2f5f6;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

  .img-section {
    width: 100%;
    height: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 35%;
      height: 60%;
      box-shadow: rgba(0, 0, 0, 0.094) 0px 5px 15px 0px;
    }

    h3 {
      margin-top: 1rem;
      font-family: bold;
    }

    p {
      font-size: 0.8rem;
      font-family: light;
      color: rgba(80, 69, 228, 0.531);
      text-align: center;
    }
  }

  .user-data {
    width: 100%;
    height: 45%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    text-align: center;

    p {
      margin-top: 3rem;
      font-family: light;
      color: #00000067;
      text-align: center;

      span {
        color: #00000067;
      }
    }

    table {
      margin-top: 1rem;
      width: 80%;
      height: 20%;
      text-align: center;
      font-family: medium;

      tr {
        width: 100%;
        display: flex;
        align-self: center;
        justify-content: space-around;
      }

      tr th {
        width: 60px;
        text-align: center;
      }

      tr td {
        color: #4f45e4;
        text-align: center;
      }
    }
  }
}

.none-profile-section {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f5f6;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

  p {
    font-family: light;
    color: #00000067;
    text-align: center;

    span {
      color: #00000067;
    }
  }
}

.news-title {
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: left;
  align-items: center;

  h2 {
    font-family: bold;
    color: #424a57;
  }
}

.news-sections {
  width: 100%;
  height: 41%;
  background-color: #f2f5f6;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;

  .new {
    width: 90%;
    height: 24%;
    background-color: #fff;
    border-radius: 20px;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      border-radius: 20px;
    }
  }
}
</style>
