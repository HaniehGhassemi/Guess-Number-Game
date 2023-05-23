import { defineComponent } from "vue";
import axios from "axios";
import AppContainer from "@/components/base/AppContainer.vue";
import Container from "@/components/container/Container.vue";
import Buttons from "@/components/Buttons/Buttons.vue";
export default defineComponent({
  name: "RessetPassword",
  components: {
    AppContainer,
    Container,
    Buttons,
  },
  data() {
    return {
      password: "",
      repassword: "",
    };
  },
  methods: {
    async ressetPass() {
      const password = this.password;
      const repassword = this.repassword;
      const result = await axios.post(
        "http://localhost:8080/api/users/signin",
        {
          password: password,
          repassword: repassword,
        }
      );
      console.log(result);
      if (result.status == 201) {
        this.$router.push({ name: "Home" });
      }
    },
  },
});
