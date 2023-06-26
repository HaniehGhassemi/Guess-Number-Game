import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";

export default defineComponent({
  name: "Top-Player",
  setup() {
    const errorMessage = ref("");
    const profilePic = ["pro-6", "pro-3", "pro-2"];
    const topPlayers = ref([]);

    async function getTopPlayer() {
      const result = await axios.get(
        `${process.env.VUE_APP_BASE_API_URL}/users/get-top-players?count=3`
      );

      if (result.data.success === false) {
        const error: string = result.data.error;
        errorMessage.value = error;
      }
      return result;
    }
    onMounted(async () => {
      const {
        data: { data: topplayer },
      } = await getTopPlayer();
      topPlayers.value = topplayer;
    });

    return {
      topPlayers,
      profilePic,
      errorMessage,
    };
  },
});
