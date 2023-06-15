import { defineComponent, ref } from "vue";
import axios from "axios";
import AppContainer from "../../base/AppContainer.vue";
import Button from "../../Buttons/Button.vue";
import BaseInput from "@/components/input/BaseInput.vue";
import { gerErrorMessage } from "@/services/ErrorHandling";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export default defineComponent({
  name: "ForgetPass",
  components: {
    AppContainer,
    Button,
    BaseInput,
  },
  setup() {
    const email = ref();
    const errorMessage = ref("");
    async function forgetPass() {
      toast("Please wait...", {
        autoClose: 8000,
      });
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
          toast.success("please check your email", {
            autoClose: 2000,
          });
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
