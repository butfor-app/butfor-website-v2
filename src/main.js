import { createApp } from "vue";
import { createHead } from "@vueuse/head"

import App from "./App.vue";
import router from "./router";

// import './index.css'
import "./assets/css/tailwind.css";

const app = createApp(App);
const head = createHead()


app.use(router);
app.use(head);


app.mount("#app");
