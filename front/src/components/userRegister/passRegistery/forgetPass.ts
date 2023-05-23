import { defineComponent } from "vue";
import axios from "axios";
import AppContainer from "../../base/AppContainer.vue";
import Container from "../../container/Container.vue";
import Buttons from "../../Buttons/Buttons.vue";
export default defineComponent({
  name: "ForgetPass",
  components: {
    AppContainer,
    Container,
    Buttons,
  },
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async forgetPass() {
      const email = this.email;
      const result = await axios.post("", {
        email: email,
      });
      console.log(result);
    },
  },
});
