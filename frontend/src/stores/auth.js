import { defineStore } from "pinia";
import axios from "axios";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    // Il token è nei cookie HttpOnly, qui teniamo solo i dati utente
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.user,
  },

  actions: {
    // LOGIN
    async login(email, password) {
      this.loading = true;
      this.error = null;
      try {
        // Chiamata al backend reale
        const response = await axios.post(
          "http://localhost:3000/api/auth/login",
          { email, password },
          { withCredentials: true } // Fondamentale per ricevere il cookie
        );

        // Se successo, salva l'utente nello stato
        this.user = response.data.user;
        localStorage.setItem("user", JSON.stringify(this.user));
        return true; // Login riuscito
      } catch (err) {
        this.error = err.response?.data?.message || "Login fallito";
        return false;
      } finally {
        this.loading = false;
      }
    },

    // REGISTER
    async register(userData) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.post(
          "http://localhost:3000/api/auth/register",
          userData,
          { withCredentials: true }
        );

        // Auto-login dopo la registrazione
        this.user = response.data.user;
        localStorage.setItem("user", JSON.stringify(this.user));
        return true;
      } catch (err) {
        this.error = err.response?.data?.message || "Registrazione fallita";
        return false;
      } finally {
        this.loading = false;
      }
    },

    // CHECK AUTH
    async checkAuth() {
      // Se non c'è user in localstorage, è inutile chiamare il backend (o forse sì se il cookie è vivo?
      // In sistemi cookie-based puri, il localStorage è solo cache. Facciamo la chiamata per sicurezza se si vuole "resuscitare" la sessioe)

      // Per ora facciamo la chiamata sempre se siamo in dubbio, o solo se pensiamo di essere loggati.
      // Strategia: proviamo a chiamare /me.

      this.loading = true;
      try {
        const response = await axios.get("http://localhost:3000/api/auth/me", {
          withCredentials: true,
        });
        this.user = response.data.user;
        localStorage.setItem("user", JSON.stringify(this.user));
        return true;
      } catch (err) {
        // Se fallisce (401), puliamo tutto
        this.user = null;
        localStorage.removeItem("user");
        return false;
      } finally {
        this.loading = false;
      }
    },

    // LOGOUT
    async logout() {
      try {
        await axios.post(
          "http://localhost:3000/api/auth/logout",
          {},
          { withCredentials: true }
        );
      } catch (err) {
        console.error("Logout error", err);
      } finally {
        this.user = null;
        localStorage.removeItem("user");
        // Forza il ricaricamento o redirect
        window.location.href = "/login";
      }
    },
  },
});
