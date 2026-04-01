<template>
  <div class="home-wrapper bg-slate-50 dark:bg-slate-900 overflow-hidden">
    <div class="hero-parallax-container relative z-0">
      <HeroSection />
    </div>

    <div
      class="content-wrapper relative z-10 bg-slate-50 dark:bg-slate-900 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.6)]"
    >
      <PrincipalSection />
      <NewsSection />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroSection from "../../components/public/HeroSection.vue";
import PrincipalSection from "../../components/public/PrincipalSection.vue";
import NewsSection from "../../components/public/NewsSection.vue";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.to(".hero-content", {
    y: 150,
    opacity: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".home-wrapper",
      start: "top top",
      end: "800px top",
      scrub: true,
    },
  });

  gsap.to(".hero-canvas", {
    y: 80,
    opacity: 0.3,
    ease: "none",
    scrollTrigger: {
      trigger: ".home-wrapper",
      start: "top top",
      end: "800px top",
      scrub: true,
    },
  });
});

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>
