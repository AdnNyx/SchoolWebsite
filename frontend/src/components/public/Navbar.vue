<template>
  <header
    ref="navbarRef"
    class="fixed top-0 w-full px-6 py-4 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm dark:shadow-slate-900/20 transition-colors duration-500"
  >
    <div class="flex justify-between items-center max-w-7xl mx-auto">
      <router-link
        to="/"
        class="flex items-center gap-3 group"
        @click="isMobileMenuOpen = false"
      >
        <img
          :src="logo"
          alt="Logo MI Al-Hidayah"
          class="w-10 h-10 object-contain transform group-hover:scale-105 transition-transform duration-300 shadow-sm"
        />
        <div
          class="text-xl md:text-2xl font-extrabold tracking-tighter text-blue-900 dark:text-white transition-colors duration-500 group-hover:text-blue-600 dark:group-hover:text-blue-400"
        >
          MI Al-Hidayah<span class="text-blue-500">.</span>
        </div>
      </router-link>

      <nav
        class="hidden md:flex items-center gap-1 font-medium text-sm text-slate-700 dark:text-slate-300 transition-colors duration-500"
      >
        <router-link
          to="/"
          class="px-4 py-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
          exact-active-class="bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-bold"
          >Beranda</router-link
        >
        <router-link
          to="/profil"
          class="px-4 py-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
          active-class="bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-bold"
          >Profil</router-link
        >
        <router-link
          to="/fasilitas"
          class="px-4 py-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
          active-class="bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-bold"
          >Fasilitas</router-link
        >
        <router-link
          to="/berita"
          class="px-4 py-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
          active-class="bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-bold"
          >Berita</router-link
        >
        <router-link
          to="/tentang-kami"
          class="px-4 py-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
          active-class="bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-bold"
          >Tentang Kami</router-link
        >
      </nav>

      <div class="flex items-center gap-2 md:gap-4">
        <button
          @click="toggleTheme"
          class="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
        >
          <svg
            v-if="isDark"
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
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
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
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </button>

        <button
          @click.stop="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <svg
            v-if="isMobileMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>

    <transition name="mobile-menu">
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden"
      >
        <nav
          class="flex flex-col px-6 py-6 gap-4 font-medium text-slate-700 dark:text-slate-300"
        >
          <router-link
            @click="isMobileMenuOpen = false"
            to="/"
            class="block px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            exact-active-class="bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-bold"
            >Beranda</router-link
          >
          <router-link
            @click="isMobileMenuOpen = false"
            to="/profil"
            class="block px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            active-class="bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-bold"
            >Profil</router-link
          >
          <router-link
            @click="isMobileMenuOpen = false"
            to="/fasilitas"
            class="block px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            active-class="bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-bold"
            >Fasilitas</router-link
          >
          <router-link
            @click="isMobileMenuOpen = false"
            to="/berita"
            class="block px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            active-class="bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-bold"
            >Berita</router-link
          >
          <router-link
            @click="isMobileMenuOpen = false"
            to="/tentang-kami"
            class="block px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            active-class="bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-bold"
            >Tentang Kami</router-link
          >
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import logo from "../../assets/logo.png";

const isDark = ref(false);
const isMobileMenuOpen = ref(false);
const navbarRef = ref<HTMLElement | null>(null);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

const handleClickOutside = (event: MouseEvent) => {
  if (
    isMobileMenuOpen.value &&
    navbarRef.value &&
    !navbarRef.value.contains(event.target as Node)
  ) {
    isMobileMenuOpen.value = false;
  }
};

onMounted(() => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    isDark.value = true;
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease-in-out;
  transform-origin: top;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: scaleY(0.95) translateY(-10px);
}
</style>
