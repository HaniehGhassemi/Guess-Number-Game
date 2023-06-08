import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";

export default defineComponent({
  name: "Top-Player",
  setup() {
    const errorMessage = ref("");
    const profilePic = ["1st-player", "2nd-player", "3rd-player", "4th-player"];
    const topPlayers = ref([]);
    async function getTopPlayer() {
      const result = await axios.get(
        `${process.env.VUE_APP_BASE_API_URL}/users/get-top-players?count=4`
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
