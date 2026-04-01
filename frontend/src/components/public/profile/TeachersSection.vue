<template>
  <div class="mt-24 profile-section pb-12">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-slate-900 dark:text-white">
        Guru & Karyawan
      </h2>
      <p class="text-slate-500 mt-2">
        Pendidik dedikatif yang siap membimbing putra-putri Anda
      </p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div
        v-for="teacher in teachers"
        :key="teacher.id"
        class="profile-card opacity-0 translate-y-10 group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 shadow-xl shadow-slate-200/80 dark:shadow-none transition-all duration-300"
      >
        <img
          :src="teacher.image"
          :alt="teacher.name"
          class="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
        />
        <div
          class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent p-4 pt-12"
        >
          <h4 class="font-bold text-white">{{ teacher.name }}</h4>
          <p class="text-blue-300 text-xs">{{ teacher.subject }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const teachers = [
  {
    id: 1,
    name: "Ust. Hasan, Lc",
    subject: "Guru Agama Islam",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Ibu Rina, S.Pd",
    subject: "Wali Kelas 1",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Bpk. Agung, S.Kom",
    subject: "Guru TIK",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Ibu Desy, M.Pd",
    subject: "Wali Kelas 6",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
];
</script>
