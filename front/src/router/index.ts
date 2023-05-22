import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import SignUp from "@/components/userRegister/SignUp.vue";
import SignIn from "@/components/userRegister/SignIn.vue";
import RessetPassword from "@/components/userRegister/RessetPassword.vue";
import ForgetPassword from "@/components/userRegister/ForgetPassword.vue";
import Game from "../views/Game.vue";

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
    path: "/game",
    name: "Game",
    component: Game,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
