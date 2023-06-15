import AppContainer from "@/components/base/AppContainer.vue";
import { defineComponent, onMounted, ref, watch } from "vue";
import axios from "axios";
import Button from "@/components/Buttons/Button.vue";
import router from "@/router";
import { gerErrorMessage } from "@/services/ErrorHandling";
import BaseInput from "@/components/input/BaseInput.vue";
import { useRoute } from "vue-router";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default defineComponent({
  name: "SignIn",
  components: {
    AppContainer,
    Button,
    BaseInput,
  },
  setup() {
    const usernameOrEmail = ref();
    const password = ref();
    const errorMessage = ref("");
    const route = useRoute();

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
      if (route.query.successMessage) {
        toast.success("Your signup was successful. Please login first!", {
          autoClose: 3000,
        });
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
