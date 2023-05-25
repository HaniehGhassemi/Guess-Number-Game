import AppContainer from "@/components/base/AppContainer.vue";
import Container from "@/components/container/Container.vue";
import { defineComponent } from "vue";
import axios from "axios";
import Button from "@/components/Buttons/Button.vue";

export default defineComponent({
  name: "SignIn",
  components: {
    AppContainer,
    Container,
    Button,
  },
  data() {
    return {
      signInData: "",
      password: "",
    };
  },
  methods: {
    async signIn() {
      const signInData = this.signInData;
      const password = this.password;
      const result = await axios.post(
        `${process.env.VUE_APP_BASE_API_URL}/auth/signin`,
        {
          usernameOrEmail: signInData,
          password: password,
        }
      );
      console.log(result);
      if (result.status == 201) {
        localStorage.setItem("token", result.data.data.token);
        this.$router.push({ name: "Home" });
      }
    },
  },
});
