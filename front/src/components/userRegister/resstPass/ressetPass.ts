import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";
import AppContainer from "@/components/base/AppContainer.vue";
import Button from "@/components/Buttons/Button.vue";
import { useRoute } from "vue-router";
import { gerErrorMessage } from "@/services/ErrorHandling";
import router from "@/router";
export default defineComponent({
  name: "RessetPassword",
  components: {
    AppContainer,
    Button,
  },
  setup() {
    const newPassword = ref();
    const confirmNewPassword = ref();
    const errorMessage = ref("");
    const token = ref();
    async function ressetPass() {
      try {
        if (localStorage.getItem("token")) {
          const reqInstance = axios.create({
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          const result = await reqInstance.post(
            `${process.env.VUE_APP_BASE_API_URL}/auth/reset-password`,
            {
              newPassword: newPassword.value,
              confirmNewPassword: confirmNewPassword.value,
            }
          );
          console.log(result);
          if (result.status == 201) {
            localStorage.removeItem("token");
            router.push({ name: "SignIn" });
          }
        } else {
          console.log(token.value.token);
          const result = await axios.post(
            `${process.env.VUE_APP_BASE_API_URL}/auth/forget/reset`,
            {
              newPassword: newPassword.value,
              confirmNewPassword: confirmNewPassword.value,
              token: token.value.token,
            }
          );
          console.log(result);
          if (result.status == 201) {
            localStorage.removeItem("token");
            router.push({ name: "SignIn" });
          }
        }
      } catch (error: any) {
        const message: string = Array.isArray(error.response.data.data.message)
          ? error.response.data.data.message[0]
          : error.response.data.data.message;
        const errr: string = gerErrorMessage(message);
        errorMessage.value = errr;
      }
    }
    async function verifyToken() {
      const route = useRoute();
      const token = route.query.token;
      const result = await axios.get(
        `${process.env.VUE_APP_BASE_API_URL}/auth/forget/verify?token=${token}`
      );
      return result;
    }
    onMounted(async () => {
      if (!localStorage.getItem("token")) {
        const {
          data: { data: userInfo },
        } = await verifyToken();
        token.value = userInfo;
      }
    });
    return {
      verifyToken,
      ressetPass,
      newPassword,
      confirmNewPassword,
      errorMessage,
    };
  },
});
