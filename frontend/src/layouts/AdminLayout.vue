<template>
  <div
    class="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 flex overflow-hidden"
  >
    <Toast />
    <div
      v-if="isSidebarOpen"
      @click="isSidebarOpen = false"
      class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden"
    ></div>

    <aside
      :class="[
        'fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 transition-transform duration-300 ease-in-out flex flex-col',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0',
      ]"
    >
      <div
        class="h-16 flex items-center px-6 border-b border-slate-200 dark:border-slate-700 shrink-0"
      >
        <img :src="logo" alt="Logo" class="w-8 h-8 mr-3" />
        <span class="text-lg font-bold text-slate-800 dark:text-white"
          >Portal Admin</span
        >
      </div>

      <div class="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        <div v-for="(group, idx) in menuGroups" :key="idx" class="mb-4">
          <p
            class="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2"
          >
            {{ group.title }}
          </p>

          <router-link
            v-for="item in group.items"
            :key="item.path"
            :to="item.path"
            @click="isSidebarOpen = false"
            class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-1"
            active-class="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold"
          >
            <component :is="item.icon" class="h-5 w-5" />
            <span class="text-sm">{{ item.name }}</span>
          </router-link>
        </div>
      </div>

      <div
        class="p-4 border-t border-slate-200 dark:border-slate-700 space-y-3 shrink-0"
      >
        <div class="flex items-center justify-between px-2">
          <div class="flex items-center gap-3">
            <div
              class="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold"
            >
              A
            </div>
            <div class="flex flex-col">
              <span
                class="text-sm font-semibold text-slate-700 dark:text-slate-200 leading-tight"
                >Admin Utama</span
              >
              <span class="text-xs text-slate-500">Super Admin</span>
            </div>
          </div>

          <button
            @click="toggleTheme"
            class="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            title="Ganti Tema"
          >
            <SunIcon v-if="isDark" class="h-5 w-5" />
            <MoonIcon v-else class="h-5 w-5" />
          </button>
        </div>

        <button
          @click="handleLogout"
          class="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors font-medium text-sm"
        >
          <LogOutIcon class="h-5 w-5" />
          Keluar
        </button>
      </div>
    </aside>

    <div class="flex-1 flex flex-col md:ml-64 min-w-0 h-screen">
      <main
        class="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-slate-50 dark:bg-slate-900"
      >
        <button
          @click="isSidebarOpen = true"
          class="md:hidden mb-6 flex items-center gap-2 p-2 px-3 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 shadow-sm border border-slate-200 dark:border-slate-700 transition-colors"
        >
          <MenuIcon class="h-5 w-5" />
          <span class="text-sm font-medium">Menu Admin</span>
        </button>

        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import logo from "../assets/logo.png";
import Toast from "../components/admin/Toast.vue";
import {
  LayoutDashboard as DashboardIcon,
  UserCircle as PrincipalIcon,
  Users as ProfileIcon,
  Building2 as FacilityIcon,
  Newspaper as NewsIcon,
  Info as AboutIcon,
  LogOut as LogOutIcon,
  Menu as MenuIcon,
  Sun as SunIcon,
  Moon as MoonIcon,
} from "lucide-vue-next";

const router = useRouter();
const isSidebarOpen = ref(false);
const isDark = ref(false);

const menuGroups = [
  {
    title: "Utama",
    items: [
      { name: "Dashboard", path: "/admin/dashboard", icon: DashboardIcon },
    ],
  },
  {
    title: "Manajemen Konten",
    items: [
      {
        name: "Halaman Beranda",
        path: "/admin/home-settings",
        icon: PrincipalIcon,
      },
      {
        name: "Halaman Profil",
        path: "/admin/profile-settings",
        icon: ProfileIcon,
      },
      {
        name: "Halaman Fasilitas",
        path: "/admin/facilities",
        icon: FacilityIcon,
      },
      { name: "Kelola Berita", path: "/admin/news", icon: NewsIcon },
      { name: "Tentang Kami", path: "/admin/about-settings", icon: AboutIcon },
    ],
  },
];

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

const handleLogout = () => {
  if (confirm("Apakah Anda yakin ingin keluar?")) {
    localStorage.removeItem("isAuthenticated");
    router.push("/admin/login");
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
  }
});
</script>
