<template>
  <div
    class="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 transition-colors duration-500"
  >
    <Navbar />

    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in" @after-enter="onPageEnter">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "../components/public/Navbar.vue";
import Footer from "../components/public/Footer.vue";
import { useLenis } from "../composables/useLenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

useLenis();

const onPageEnter = () => {
  ScrollTrigger.refresh();
};
</script>

<style>
.page-fade-enter-active,
.page-fade-leave-active {
  transition:
    opacity 0.4s ease-in-out,
    transform 0.4s ease-in-out;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
</style>
