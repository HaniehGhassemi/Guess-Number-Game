import AppContainer from "@/components/base/AppContainer.vue";
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";
import Button from "@/components/Buttons/Button.vue";
import router from "@/router";
import { gerErrorMessage } from "@/services/ErrorHandling";
import { socketHandler } from "@/services/userInfo";

export default defineComponent({
  name: "SignIn",
  components: {
    AppContainer,
    Button,
  },
  setup() {
    const usernameOrEmail = ref();
    const password = ref();
    const errorMessage = ref("");
    async function signIn() {
      try {
        const result = await axios.post(
          `${process.env.VUE_APP_BASE_API_URL}/auth/signin`,
          {
            usernameOrEmail: usernameOrEmail.value,
            password: password.value,
          }
        );
        if (result.status === 201) {
          localStorage.setItem("token", result.data.data.token);
          const socketInstance = new socketHandler(result.data.data.token);
          socketInstance.socket.connect();
          socketInstance.socket.emit("login", null);
          router.push({ name: "Home" });
        }
      } catch (error: any) {
        const message: string = Array.isArray(error.response.data.data.message)
          ? error.response.data.data.message[0]
          : error.response.data.data.message;
        const errr: string = gerErrorMessage(message);
        errorMessage.value = errr;
      }
    }
    onMounted(async () => {
      if (localStorage.getItem("token")) {
        router.push({ name: "Home" });
      }
    });

    return {
      usernameOrEmail,
      password,
      signIn,
      errorMessage,
    };
  },
});
