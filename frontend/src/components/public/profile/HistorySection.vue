<template>
  <div
    class="profile-card opacity-0 translate-y-10 bg-white dark:bg-slate-800 p-10 rounded-3xl border-2 border-slate-300 dark:border-slate-700 shadow-xl shadow-slate-200/80 dark:shadow-none h-full flex flex-col justify-between transition-all duration-300"
  >
    <div>
      <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">
        Sejarah Singkat
      </h2>
      <div class="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
        <p>
          <span class="font-bold text-slate-900 dark:text-white"
            >MI Al-Hidayah Kemuning</span
          >
          didirikan atas dasar kepedulian masyarakat sekitar terhadap pentingnya
          pendidikan dasar yang berlandaskan nilai-nilai ajaran Islam (Aqidah
          Akhlak) tanpa meninggalkan kurikulum ilmu pengetahuan umum.
        </p>
        <p>
          Berawal dari sebuah madrasah kecil, kini MI Al-Hidayah terus
          bertransformasi menjadi lembaga pendidikan yang modern, responsif
          terhadap teknologi, namun tetap mempertahankan tradisi pesantren dan
          adab islami dalam keseharian para siswanya.
        </p>
      </div>
    </div>

    <div
      class="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-slate-100 dark:border-slate-700"
    >
      <div class="text-center">
        <div class="text-3xl font-black text-blue-600 dark:text-blue-400">
          A
        </div>
        <div
          class="text-xs uppercase tracking-wider font-semibold text-slate-500 mt-1"
        >
          Akreditasi
        </div>
      </div>
      <div class="text-center">
        <div
          class="text-3xl font-black text-blue-600 dark:text-blue-400 flex justify-center"
        >
          <span class="stat-number" data-target="20">0</span>+
        </div>
        <div
          class="text-xs uppercase tracking-wider font-semibold text-slate-500 mt-1"
        >
          Tenaga Pendidik
        </div>
      </div>
      <div class="text-center">
        <div class="text-3xl font-black text-blue-600 dark:text-blue-400">
          <span class="stat-number" data-target="1998">0</span>
        </div>
        <div
          class="text-xs uppercase tracking-wider font-semibold text-slate-500 mt-1"
        >
          Tahun Berdiri
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const counters = document.querySelectorAll(".stat-number");
  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-target") || "0");
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 2.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: counter,
        start: "top 90%",
      },
      onUpdate: () => {
        counter.innerHTML = Math.floor(obj.val).toString();
      },
    });
  });
});
</script>
