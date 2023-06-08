import { defineComponent, ref } from "vue";
import axios from "axios";
import AppContainer from "../../base/AppContainer.vue";
import Container from "@/components/container/Container.vue";
import Button from "../../Buttons/Button.vue";
import { gerErrorMessage } from "@/services/ErrorHandling";
import router from "@/router";
export default defineComponent({
  name: "ForgetPass",
  components: {
    AppContainer,
    Container,
    Button,
  },
  setup() {
    const email = ref();
    const errorMessage = ref("");
    async function forgetPass() {
      try {
        const redirectLink = "http://localhost:8081/resset-pass";
        const result = await axios.post(
          `${process.env.VUE_APP_BASE_API_URL}/auth/forget/request`,
          {
            email: email.value,
            redirectLink: redirectLink,
          }
        );
        if (result.status == 201) {
          alert("check Your Email");
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
      forgetPass,
      email,
      errorMessage,
    };
  },
});
