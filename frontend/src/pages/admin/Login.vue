<template>
  <div
    class="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-500 px-6"
  >
    <div
      class="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-500/30 dark:bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"
    ></div>
    <div
      class="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-emerald-500/20 dark:bg-emerald-600/10 blur-[100px] rounded-full pointer-events-none"
    ></div>

    <div
      class="login-card opacity-0 translate-y-12 w-full max-w-md bg-white/80 dark:bg-slate-800/80 backdrop-blur-2xl border-2 border-white/50 dark:border-slate-700/50 p-8 rounded-3xl shadow-2xl shadow-slate-200/50 dark:shadow-black/40 relative z-10"
    >
      <div
        class="text-center mb-8 login-element opacity-0 translate-y-4 flex flex-col items-center"
      >
        <img
          :src="logo"
          alt="Logo MI Al-Hidayah Kemuning"
          class="h-16 w-16 object-contain mb-4 transform group-hover:scale-105 transition-transform duration-300 shadow-sm"
        />
        <h2
          class="text-2xl font-black text-slate-900 dark:text-white tracking-tight"
        >
          Portal Admin
        </h2>
        <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">
          MI Al-Hidayah Kemuning
        </p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-5">
        <div class="space-y-1.5 login-element opacity-0 translate-y-4">
          <label
            class="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1"
            >Username / Email</label
          >
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <input
              v-model="form.username"
              type="text"
              placeholder="Masukkan username"
              class="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-slate-800 text-slate-900 dark:text-white transition-all"
              required
            />
          </div>
        </div>

        <div class="space-y-1.5 login-element opacity-0 translate-y-4">
          <label
            class="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1"
            >Password</label
          >
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <input
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="••••••••"
              class="w-full pl-11 pr-12 py-3.5 rounded-xl bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-slate-800 text-slate-900 dark:text-white transition-all"
              required
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-blue-500 transition-colors"
            >
              <svg
                v-if="!showPassword"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          class="flex items-center justify-between login-element opacity-0 translate-y-4"
        >
          <label class="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              class="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 bg-white dark:bg-slate-900 cursor-pointer"
            />
            <span
              class="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors"
              >Ingat saya</span
            >
          </label>
          <a
            href="#"
            class="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >Lupa Password?</a
          >
        </div>

        <button
          type="submit"
          :disabled="isLoading"
          class="login-element opacity-0 translate-y-4 w-full py-3.5 mt-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 dark:disabled:bg-blue-800 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-500/30 flex justify-center items-center gap-2"
        >
          <span v-if="!isLoading">Masuk ke Dashboard</span>
          <svg
            v-else
            class="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </button>
      </form>

      <div class="mt-8 text-center login-element opacity-0">
        <router-link
          to="/"
          class="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-center gap-1 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Kembali ke Halaman Utama
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import gsap from "gsap";
import logo from "../../assets/logo.png";

const router = useRouter();
const showPassword = ref(false);
const isLoading = ref(false);

const form = reactive({
  username: "",
  password: "",
});

const handleLogin = () => {
  isLoading.value = true;

  setTimeout(() => {
    isLoading.value = false;
    localStorage.setItem("isAuthenticated", "true");
    router.push("/admin/dashboard");
  }, 1500);
};

onMounted(() => {
  gsap.to(".login-card", {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power3.out",
  });

  gsap.to(".login-element", {
    y: 0,
    opacity: 1,
    duration: 0.6,
    stagger: 0.1,
    delay: 0.2,
    ease: "power3.out",
  });
});
</script>
