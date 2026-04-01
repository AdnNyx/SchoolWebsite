<template>
  <section
    class="hero-section relative h-screen flex flex-col justify-center items-center text-center px-4 pt-20 transition-colors duration-500"
  >
    <canvas
      ref="canvasRef"
      class="hero-canvas absolute inset-0 z-0 pointer-events-none"
    ></canvas>

    <div class="hero-content z-10 flex flex-col items-center">
      <h1
        class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight max-w-5xl leading-[1.1] text-slate-900 dark:text-white transition-colors duration-500"
      >
        <span class="block overflow-hidden pb-2">
          <span
            class="reveal-text block transform translate-y-[120%] opacity-0"
          >
            Membentuk Generasi
          </span>
        </span>

        <span class="block overflow-hidden pb-4">
          <span
            class="reveal-text block transform translate-y-[120%] opacity-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500"
          >
            Unggul & Inovatif
          </span>
        </span>
      </h1>

      <p
        class="hero-desc mt-8 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl opacity-0 translate-y-8 font-medium bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm p-4 rounded-2xl border border-white/40 dark:border-slate-700/50 shadow-sm transition-colors duration-500"
      >
        Selamat datang di
        <span class="text-blue-600 dark:text-blue-400 font-bold"
          >MI Al-Hidayah Kemuning</span
        >. Kami berkomitmen menyediakan lingkungan belajar interaktif, fasilitas
        modern, dan kurikulum yang adaptif.
      </p>

      <div class="hero-btn mt-12 flex flex-wrap justify-center gap-4 opacity-0">
        <a
          href="#profil"
          class="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold hover:bg-slate-800 dark:hover:bg-slate-200 transition-all duration-300 shadow-xl shadow-slate-900/20 dark:shadow-none hover:-translate-y-1"
        >
          Mulai Penjelajahan
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import { HeroScene } from "../../webgl/HeroScene";

const canvasRef = ref<HTMLCanvasElement | null>(null);
let heroScene: HeroScene | null = null;

onMounted(() => {
  // Inisialisasi Partikel Bintang
  if (canvasRef.value) {
    heroScene = new HeroScene(canvasRef.value);
  }

  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

  tl.to(".reveal-text", {
    y: "0%",
    opacity: 1,
    duration: 1.2,
    stagger: 0.15,
    delay: 0.2,
  })

    .to(
      ".hero-desc",
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
      "-=0.8",
    )

    .to(
      ".hero-btn",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
      },
      "-=0.6",
    );
});

onUnmounted(() => {
  if (heroScene) heroScene.destroy();
});
</script>
