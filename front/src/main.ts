import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import { PiniaSharedState } from "pinia-shared-state";
const pinia = createPinia();

pinia.use(
  PiniaSharedState({
    // Enables the plugin for all stores. Defaults to true.
    enable: false,
    type: "native",
    // Enforce a type. One of native, idb, localstorage or node. Defaults to native.
  })
);
createApp(App).use(router).use(pinia).mount("#app");
