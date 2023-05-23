import AppContainer from "@/components/base/AppContainer.vue";
import Container from "@/components/container/Container.vue";
import { defineComponent } from "vue";
import axios from "axios";
import Buttons from "@/components/Buttons/Buttons.vue";

export default defineComponent({
  name: "SignIn",
  components: {
    AppContainer,
    Container,
    Buttons,
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
      const result = await axios.post("", {
        username: signInData,
        password: password,
      });
      console.log(result);
      if (result.status == 201) {
        this.$router.push({ name: "Home" });
      }
    },
  },
});
