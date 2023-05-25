import { defineComponent } from "vue";
import axios from "axios";
import AppContainer from "../../base/AppContainer.vue";
import Container from "../../container/Container.vue";
import Button from "../../Buttons/Button.vue";
export default defineComponent({
  name: "ForgetPass",
  components: {
    AppContainer,
    Container,
    Button,
  },
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async forgetPass() {
      const email = this.email;
      const redirectLink = "http://localhost:8081/resset-pass";
      const result = await axios.post(
        `${process.env.VUE_APP_BASE_API_URL}/auth/forget/request`,
        {
          email: email,
          redirectLink: redirectLink,
        }
      );
      console.log(result);
    },
  },
});
