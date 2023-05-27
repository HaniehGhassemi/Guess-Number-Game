import AppContainer from "@/components/base/AppContainer.vue";
import Container from "@/components/container/Container.vue";
import { defineComponent } from "vue";
import axios from "axios";
import Button from "@/components/Buttons/Button.vue";
export default defineComponent({
  components: {
    AppContainer,
    Container,
    Button,
  },
  methods: {
    async signUp() {
      const fullname = "";
      const username = "";
      const email = "";
      const password = "";
      const confirmPassword = "";
      const result = await axios.post(
        `${process.env.VUE_APP_BASE_API_URL}/auth/signup`,
        {
          fullname,
          username,
          email,
          password,
          confirmPassword,
        }
      );
      if (result.status == 201) {
        this.$router.push({ name: "SignIn" });
      }
      console.log(result);
    },
  },
});
