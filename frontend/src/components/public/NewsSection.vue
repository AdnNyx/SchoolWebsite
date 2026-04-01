<template>
  <section
    id="berita"
    class="scroll-mt-24 min-h-screen py-24 px-6 border-t border-slate-100 dark:border-slate-800 transition-colors duration-500"
  >
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-end mb-12">
        <div class="news-header opacity-0 translate-y-10">
          <h2
            class="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm mb-2"
          >
            Kabar Madrasah
          </h2>
          <h3
            class="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight"
          >
            Berita & Kegiatan Terbaru
          </h3>
        </div>

        <a
          href="#"
          class="hidden md:inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-colors mt-4 md:mt-0"
        >
          Lihat Semua Berita
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>

      <div class="news-grid grid grid-cols-1 md:grid-cols-3 gap-8">
        <article
          v-for="news in newsList"
          :key="news.id"
          class="news-card opacity-0 translate-y-10 group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 flex flex-col"
        >
          <div class="relative h-56 overflow-hidden flex-shrink-0">
            <img
              :src="news.image"
              :alt="news.title"
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div
              :class="`absolute top-4 left-4 ${news.categoryColor} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider`"
            >
              {{ news.category }}
            </div>
          </div>

          <div class="p-6 flex flex-col flex-grow">
            <div class="text-sm text-slate-500 dark:text-slate-400 mb-2">
              {{ news.date }}
            </div>
            <h4
              class="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors line-clamp-2"
            >
              {{ news.title }}
            </h4>
            <p
              class="text-slate-600 dark:text-slate-400 text-sm line-clamp-3 mb-4 flex-grow"
            >
              {{ news.excerpt }}
            </p>
            <a
              href="#"
              class="text-blue-600 dark:text-blue-400 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all mt-auto"
            >
              Baca selengkapnya &rarr;
            </a>
          </div>
        </article>
      </div>

      <div class="mt-8 text-center md:hidden">
        <button
          class="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-full font-semibold w-full"
        >
          Lihat Semua Berita
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Data dummy yang nantinya akan diganti dengan data asli dari Backend API (Express/PostgreSQL)
const newsList = [
  {
    id: 1,
    category: "Akademik",
    categoryColor: "bg-blue-600",
    date: "29 Maret 2026",
    title: "Penerimaan Peserta Didik Baru (PPDB) Tahun Ajaran 2026/2027",
    excerpt:
      "MI Al-Hidayah Kemuning kembali membuka pendaftaran bagi calon siswa baru. Simak persyaratan lengkapnya.",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    category: "Kegiatan",
    categoryColor: "bg-emerald-600",
    date: "25 Maret 2026",
    title: "Siswa MI Al-Hidayah Raih Juara 1 Lomba Tahfidz Tingkat Kabupaten",
    excerpt:
      "Prestasi membanggakan kembali ditorehkan oleh siswa kita dalam ajang Musabaqah Tilawatil Quran pelajar tahun ini.",
    image:
      "https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    category: "Pengumuman",
    categoryColor: "bg-orange-500",
    date: "20 Maret 2026",
    title: "Pembaruan Sistem E-Learning Madrasah untuk Semester Genap",
    excerpt:
      "Terdapat beberapa fitur baru di portal e-learning yang diharapkan dapat memudahkan proses belajar jarak jauh.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

onMounted(() => {
  gsap.to(".news-header", {
    scrollTrigger: { trigger: ".news-header", start: "top 85%" },
    opacity: 1,
    y: 0,
    duration: 1,
  });

  gsap.to(".news-card", {
    scrollTrigger: {
      trigger: ".news-grid",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
  });
});
</script>
