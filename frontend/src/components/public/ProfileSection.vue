<template>
  <section
    id="profil"
    class="py-24 px-6 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-500"
  >
    <div class="max-w-6xl mx-auto">
      <div class="profile-header opacity-0 translate-y-10 text-center mb-16">
        <h2
          class="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm mb-3"
        >
          Tentang Kami
        </h2>
        <h3
          class="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight"
        >
          Membangun Fondasi Akhlak <br class="hidden md:block" />
          & Intelektual Sejak Dini
        </h3>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div
          class="profile-text opacity-0 -translate-x-10 lg:col-span-7 space-y-6 text-lg text-slate-600 dark:text-slate-400"
        >
          <p>
            <span class="font-bold text-slate-900 dark:text-white"
              >MI Al-Hidayah Kemuning</span
            >
            telah berdiri sebagai lembaga pendidikan yang mengintegrasikan
            nilai-nilai Islam dengan kurikulum nasional yang dinamis.
          </p>
          <p>
            Kami percaya bahwa setiap anak memiliki potensi unik. Melalui
            pendekatan pembelajaran yang interaktif dan berbasis karakter, kami
            membimbing siswa untuk menjadi pribadi yang tidak hanya cerdas
            secara akademis, tetapi juga santun dan mandiri.
          </p>

          <div class="grid grid-cols-3 gap-4 pt-6">
            <div
              class="text-center p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700"
            >
              <div class="text-2xl font-bold text-blue-600">20+</div>
              <div class="text-xs uppercase tracking-wider font-semibold">
                Guru Ahli
              </div>
            </div>
            <div
              class="text-center p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700"
            >
              <div class="text-2xl font-bold text-blue-600">300+</div>
              <div class="text-xs uppercase tracking-wider font-semibold">
                Siswa
              </div>
            </div>
            <div
              class="text-center p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700"
            >
              <div class="text-2xl font-bold text-blue-600">15+</div>
              <div class="text-xs uppercase tracking-wider font-semibold">
                Eskul
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 space-y-6">
          <div
            class="profile-card-v opacity-0 translate-x-10 p-8 rounded-3xl bg-blue-600 text-white shadow-xl shadow-blue-600/20"
          >
            <h4 class="text-xl font-bold mb-4 flex items-center gap-2">
              <svg
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
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              Visi Kami
            </h4>
            <p class="italic text-blue-50 leading-relaxed">
              "Terwujudnya generasi yang unggul dalam prestasi, mulia dalam
              akhlak, dan mandiri dalam beribadah."
            </p>
          </div>

          <div
            class="profile-card-m opacity-0 translate-x-10 p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white shadow-sm"
          >
            <h4
              class="text-xl font-bold mb-4 flex items-center gap-2 text-blue-600 dark:text-blue-400"
            >
              <svg
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
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              Misi Kami
            </h4>
            <ul class="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li class="flex gap-3">
                <span class="text-blue-500 font-bold">01.</span>
                Menyelenggarakan pendidikan Islam yang berkualitas.
              </li>
              <li class="flex gap-3">
                <span class="text-blue-500 font-bold">02.</span> Membiasakan
                adab islami dalam kehidupan sehari-hari.
              </li>
              <li class="flex gap-3">
                <span class="text-blue-500 font-bold">03.</span> Mengembangkan
                minat dan bakat melalui ekstrakurikuler.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    // Animasi Header
    gsap.to(".profile-header", {
      scrollTrigger: { trigger: "#profil", start: "top 80%" },
      opacity: 1,
      y: 0,
      duration: 1,
    });

    // Animasi Text (Muncul dari kiri)
    gsap.to(".profile-text", {
      scrollTrigger: { trigger: ".profile-text", start: "top 85%" },
      opacity: 1,
      x: 0,
      duration: 1.2,
    });

    // Animasi Cards (Muncul dari kanan dengan stagger)
    gsap.to([".profile-card-v", ".profile-card-m"], {
      scrollTrigger: { trigger: ".profile-text", start: "top 85%" },
      opacity: 1,
      x: 0,
      duration: 1,
      stagger: 0.3,
      ease: "back.out(1.2)",
    });
  });
});
</script>
