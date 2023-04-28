import { createApp } from "vue";
import { createPinia } from "pinia";
import { createHead } from "@vueuse/head";
import VueGtag from "vue-gtag";

import App from "./App.vue";
import router from "./router";

// import './index.css'
import "./assets/css/tailwind.css";

const pinia = createPinia();
const head = createHead();

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(head);
app.use(
  VueGtag,
  {
    appName: "BUTFOR",
    pageTrackerScreenviewEnabled: true,
    config: {
      id: "G-WW9RL8K8L7",
    },
    onReady () {
        console.log('ready');
      },
      onBeforeTrack () {
        // before!
        console.log('before');
      },
      onAfterTrack () {
        // after!
        console.log('after');
      }
  },
  router,
 
);

app.mount("#app");
