import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { useAuthStore } from "./stores/auth";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia); // Attiva Pinia
app.use(router); // Attiva il Router

// Configura interceptor di Axios per gestire 401 (Sessione scaduta)
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      const authStore = useAuthStore();
      // Logout se riceviamo 401 (non autorizzato)
      authStore.logout();
    }
    return Promise.reject(error);
  }
);

app.mount("#app");
