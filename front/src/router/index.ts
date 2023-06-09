import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import SignUp from "@/components/userRegister/signUp/SignUp.vue";
import SignIn from "@/components/userRegister/signIn/SignIn.vue";
import RessetPassword from "@/components/userRegister/resstPass/RessetPassword.vue";
import ForgetPassword from "@/components/userRegister/forgetPass/ForgetPassword.vue";
import GuessNumber from "@/components/game/GuessNumber.vue";
import NotFound from "@/views/NotFound.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/resset-pass",
    name: "RessetPassword",
    component: RessetPassword,
  },
  {
    path: "/forget-pass",
    name: "ForgetPassword",
    component: ForgetPassword,
  },
  {
    path: "/guess-number",
    name: "Guess-Number",
    component: GuessNumber,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
