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
          class="news-anim text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 opacity-0 translate-y-8"
        >
          Portal <span class="text-blue-600 dark:text-blue-400">Berita</span>
        </h1>
        <p
          class="news-anim text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto opacity-0 translate-y-8"
        >
          Ikuti perkembangan terbaru, pengumuman resmi, dan dokumentasi kegiatan
          dari keluarga besar MI Al-Hidayah Kemuning.
        </p>
      </div>
    </header>

    <section class="px-6 max-w-7xl mx-auto">
      <div
        class="news-anim opacity-0 translate-y-8 flex flex-wrap justify-center gap-3 mb-12"
      >
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          :class="[
            'px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-sm border',
            selectedCategory === category
              ? 'bg-blue-600 text-white border-blue-600 dark:border-blue-500 shadow-blue-500/30'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500',
          ]"
        >
          {{ category }}
        </button>
      </div>

      <transition-group
        name="news-list"
        tag="div"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
      >
        <article
          v-for="news in filteredNews"
          :key="news.id"
          class="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border-2 border-slate-300 dark:border-slate-700 shadow-xl shadow-slate-200/80 dark:shadow-none flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-300 dark:hover:border-blue-500"
        >
          <div class="relative h-56 overflow-hidden flex-shrink-0">
            <img
              :src="news.image"
              :alt="news.title"
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div
              :class="`absolute top-4 left-4 ${news.color} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider`"
            >
              {{ news.category }}
            </div>
          </div>

          <div class="p-6 flex flex-col flex-grow">
            <div
              class="text-sm text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-2"
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
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
      </transition-group>

      <div
        v-if="filteredNews.length === 0"
        class="text-center py-20 text-slate-500 dark:text-slate-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-16 w-16 mx-auto mb-4 opacity-50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15M9 11l3 3m0 0l3-3m-3 3V8"
          />
        </svg>
        <p class="text-xl font-semibold">Belum ada berita di kategori ini.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import gsap from "gsap";

const categories = ["Semua", "Akademik", "Kegiatan", "Pengumuman", "Prestasi"];
const selectedCategory = ref("Semua");

// Data Dummy Berita (9 Item)
const newsList = [
  {
    id: 1,
    category: "Akademik",
    color: "bg-blue-600",
    date: "29 Maret 2026",
    title: "Penerimaan Peserta Didik Baru (PPDB) Tahun Ajaran 2026/2027",
    excerpt:
      "MI Al-Hidayah Kemuning kembali membuka pendaftaran bagi calon siswa baru. Simak persyaratan lengkapnya.",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    category: "Prestasi",
    color: "bg-purple-600",
    date: "25 Maret 2026",
    title: "Siswa MI Al-Hidayah Raih Juara 1 Lomba Tahfidz Tingkat Kabupaten",
    excerpt:
      "Prestasi membanggakan kembali ditorehkan oleh siswa kita dalam ajang Musabaqah Tilawatil Quran pelajar.",
    image:
      "https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    category: "Pengumuman",
    color: "bg-orange-500",
    date: "20 Maret 2026",
    title: "Pembaruan Sistem E-Learning Madrasah untuk Semester Genap",
    excerpt:
      "Terdapat beberapa fitur baru di portal e-learning yang diharapkan dapat memudahkan proses belajar jarak jauh.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    category: "Kegiatan",
    color: "bg-emerald-600",
    date: "15 Maret 2026",
    title: "Kegiatan Outbound Kemah Bhakti Pramuka Penggalang",
    excerpt:
      "Siswa kelas 5 dan 6 mengikuti kegiatan kemah bhakti di bumi perkemahan cibubur selama 3 hari 2 malam.",
    image:
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    category: "Akademik",
    color: "bg-blue-600",
    date: "10 Maret 2026",
    title: "Jadwal Pelaksanaan Ujian Tengah Semester (UTS) Genap",
    excerpt:
      "Diinformasikan kepada seluruh siswa dan wali murid mengenai jadwal UTS genap yang akan dilaksanakan minggu depan.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    category: "Prestasi",
    color: "bg-purple-600",
    date: "02 Maret 2026",
    title: "Tim Cerdas Cermat MI Al-Hidayah Tembus Final Tingkat Provinsi",
    excerpt:
      "Alhamdulillah, perwakilan sekolah kita berhasil melaju ke babak final lomba cerdas cermat PAI.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    category: "Kegiatan",
    color: "bg-emerald-600",
    date: "28 Februari 2026",
    title: "Peringatan Isra Mi'raj Nabi Muhammad SAW 1447 H",
    excerpt:
      "Madrasah mengadakan pengajian akbar dan lomba kaligrafi dalam rangka memperingati Isra Mi'raj.",
    image:
      "https://images.unsplash.com/photo-1564683214964-6fddfb111db4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    category: "Pengumuman",
    color: "bg-orange-500",
    date: "20 Februari 2026",
    title: "Pengambilan Raport Bayangan Semester Genap",
    excerpt:
      "Undangan pengambilan raport bayangan bagi seluruh wali murid kelas 1 hingga kelas 6.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    category: "Kegiatan",
    color: "bg-emerald-600",
    date: "14 Februari 2026",
    title: "Pemeriksaan Kesehatan Gigi dan Mata Rutin Siswa",
    excerpt:
      "Bekerja sama dengan Puskesmas setempat, madrasah mengadakan pemeriksaan kesehatan berkala.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
  },
];

const filteredNews = computed(() => {
  if (selectedCategory.value === "Semua") {
    return newsList;
  }
  return newsList.filter((news) => news.category === selectedCategory.value);
});

onMounted(() => {
  gsap.to(".news-anim", {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  });
});
</script>

<style>
.news-list-enter-active,
.news-list-leave-active {
  transition: all 0.5s ease;
}

.news-list-enter-from,
.news-list-leave-to {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

.news-list-move {
  transition: transform 0.5s ease;
}

.news-list-leave-active {
  position: absolute;
}
</style>
