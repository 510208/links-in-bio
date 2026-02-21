import { createApp } from "vue";
import "@/styles/style.css";
import App from "./App.vue";

import LenisVue from "lenis/vue";

createApp(App).use(LenisVue).mount("#app");
