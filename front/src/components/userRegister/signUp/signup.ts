import AppContainer from "@/components/base/AppContainer.vue";
import Container from "@/components/container/Container.vue";
import { defineComponent, ref } from "vue";
import axios from "axios";
import Button from "@/components/Buttons/Button.vue";
import { gerErrorMessage } from "@/services/ErrorHandling";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    AppContainer,
    Container,
    Button,
  },
  setup() {
    const router = useRouter();
    const fullname = ref();
    const username = ref();
    const email = ref();
    const errorMessage = ref("");
    const password = ref();
    const confirmPassword = ref();
    async function signUp() {
      try {
        const result = await axios.post(
          `${process.env.VUE_APP_BASE_API_URL}/auth/signup`,
          {
            fullname: fullname.value,
            username: username.value,
            email: email.value,
            password: password.value,
            confirmPassword: confirmPassword.value,
          }
        );
        if (result.status == 201) {
          router.push({ name: "SignIn" });
        }
      } catch (error: any) {
        const message: string = Array.isArray(error.response.data.data.message)
          ? error.response.data.data.message[0]
          : error.response.data.data.message;
        const errr: string = gerErrorMessage(message);
        errorMessage.value = errr;
      }
    }

    return {
      signUp,
      errorMessage,
      fullname,
      username,
      email,
      password,
      confirmPassword,
    };
  },
});
