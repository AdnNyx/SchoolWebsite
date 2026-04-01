import { createApp } from "vue";
import "./assets/tailwind.css";
import App from "./App.vue";
import router from "./router";
import { vParallax } from "./directives/vParallax";

const app = createApp(App);

app.use(router);
app.directive("parallax", vParallax);
app.mount("#app");
