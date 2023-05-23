import AppContainer from "@/components/base/AppContainer.vue";
import Container from "@/components/container/Container.vue";
import { defineComponent } from "vue";
import axios from "axios";
import Buttons from "@/components/Buttons/Buttons.vue";
export default defineComponent({
  components: {
    AppContainer,
    Container,
  },
  data() {
    return {
      fullname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    async signUp() {
      const fullname = this.fullname;
      const username = this.username;
      const email = this.email;
      const password = this.password;
      const confirmPassword = this.confirmPassword;
      console.log(process.env.VUE_APP_BASE_API_URL);
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
    },
  },
});
