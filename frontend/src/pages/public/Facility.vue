<template>
  <div
    class="pt-24 pb-24 min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-500"
  >
    <header class="py-20 px-6 text-center relative overflow-hidden">
      <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-500/10 dark:bg-blue-500/5 blur-3xl rounded-full -z-10"
      ></div>

      <div class="max-w-4xl mx-auto">
        <h1
          class="facility-anim text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 opacity-0 translate-y-8"
        >
          Fasilitas
          <span class="text-blue-600 dark:text-blue-400">Madrasah</span>
        </h1>
        <p
          class="facility-anim text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto opacity-0 translate-y-8"
        >
          Kami menyediakan sarana dan prasarana yang representatif, modern, dan
          nyaman untuk mendukung optimalisasi proses belajar mengajar serta
          pengembangan bakat siswa.
        </p>
      </div>
    </header>

    <section class="px-6 max-w-6xl mx-auto">
      <div
        class="facility-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <article
          v-for="facility in facilities"
          :key="facility.id"
          class="facility-card opacity-0 translate-y-10 group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border-2 border-slate-300 dark:border-slate-700 shadow-xl shadow-slate-200/80 dark:shadow-none flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-300 dark:hover:border-blue-500"
        >
          <div class="relative h-64 overflow-hidden">
            <img
              :src="facility.image"
              :alt="facility.name"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"
            ></div>

            <div
              class="absolute bottom-4 left-4 bg-blue-600 text-white p-3 rounded-2xl shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300"
            >
              <component :is="facility.icon" class="w-6 h-6" />
            </div>
          </div>

          <div class="p-6 flex-grow flex flex-col justify-between">
            <div>
              <h3
                class="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
              >
                {{ facility.name }}
              </h3>
              <p
                class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed"
              >
                {{ facility.desc }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { h } from "vue";

// Definisi Icon Sederhana
const IconBook = () =>
  h(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      "stroke-width": "2",
    },
    [
      h("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      }),
    ],
  );
const IconDesktop = () =>
  h(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      "stroke-width": "2",
    },
    [
      h("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      }),
    ],
  );
const IconMosque = () =>
  h(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      "stroke-width": "2",
    },
    [
      h("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M3 21v-4m22 4v-4m-3.1-2l3.1-4.6M4.1 15L1 10.4m11 10.6v-5.5a2.5 2.5 0 00-5 0V21m10 0v-5.5a2.5 2.5 0 00-5 0V21m-6-8V7a4 4 0 018 0v6",
      }),
    ],
  );
const IconSport = () =>
  h(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      "stroke-width": "2",
    },
    [
      h("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M14.752 11.168l-3.197-2.132A4 4 0 002 9.87v4.263a4 4 0 005.555 3.332l2.31-1.155a2 2 0 011.78 0l2.31 1.155a4 4 0 005.555-3.332V9.87a4 4 0 00-4.76-3.832z",
      }),
    ],
  );
const IconClass = () =>
  h(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      "stroke-width": "2",
    },
    [
      h("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      }),
    ],
  );
const IconClinic = () =>
  h(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      "stroke-width": "2",
    },
    [
      h("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
      }),
    ],
  );

// Data Dummy Fasilitas
const facilities = [
  {
    id: 1,
    name: "Perpustakaan Digital",
    desc: "Dilengkapi dengan ribuan koleksi buku cetak dan e-book, ruang baca yang nyaman, dan komputer akses jurnal.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: IconBook,
  },
  {
    id: 2,
    name: "Laboratorium Komputer",
    desc: "Fasilitas 40 unit komputer spesifikasi tinggi dengan akses internet cepat untuk menunjang pembelajaran TIK siswa.",
    image:
      "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: IconDesktop,
  },
  {
    id: 3,
    name: "Masjid Baitul 'Ilmi",
    desc: "Pusat kegiatan ibadah, tahfidz, dan kajian keislaman yang mampu menampung seluruh siswa dan staf madrasah.",
    image:
      "https://images.unsplash.com/photo-1564683214964-6fddfb111db4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: IconMosque,
  },
  {
    id: 4,
    name: "Ruang Kelas Modern",
    desc: "Kelas ber-AC yang dilengkapi dengan proyektor interaktif, CCTV, dan tata letak meja yang mendukung diskusi kelompok.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: IconClass,
  },
  {
    id: 5,
    name: "Lapangan Olahraga",
    desc: "Area terbuka multifungsi untuk kegiatan upacara, senam pagi, basket, futsal, dan ekstrakurikuler lainnya.",
    image:
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: IconSport,
  },
  {
    id: 6,
    name: "UKS & Klinik Kesehatan",
    desc: "Ruang kesehatan dengan peralatan medis dasar dan perawat jaga untuk menangani pertolongan pertama pada siswa.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: IconClinic,
  },
];

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // Animasi Header
  gsap.to(".facility-anim", {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  });

  gsap.to(".facility-card", {
    scrollTrigger: {
      trigger: ".facility-grid",
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
  });
});
</script>
