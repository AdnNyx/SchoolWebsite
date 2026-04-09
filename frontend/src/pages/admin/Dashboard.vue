<template>
  <div class="space-y-6">
    <div>
      <h1 class="text-2xl font-bold text-slate-900 dark:text-white">
        Dashboard Overview
      </h1>
      <p class="text-slate-500 dark:text-slate-400 mt-1">
        Selamat datang kembali, Admin! Berikut ringkasan sistem hari ini.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        class="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-4"
      >
        <div
          class="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0"
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
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </div>
        <div>
          <p class="text-sm font-medium text-slate-500 dark:text-slate-400">
            Total Siswa
          </p>
          <p class="text-2xl font-bold text-slate-900 dark:text-white">452</p>
        </div>
      </div>

      <div
        class="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-4"
      >
        <div
          class="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0"
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
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15M9 11l3 3m0 0l3-3m-3 3V8"
            />
          </svg>
        </div>
        <div>
          <p class="text-sm font-medium text-slate-500 dark:text-slate-400">
            Total Berita
          </p>
          <p class="text-2xl font-bold text-slate-900 dark:text-white">24</p>
        </div>
      </div>
    </div>

    <div
      class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-sm min-h-[300px] flex items-center justify-center"
    >
      <p
        class="text-slate-400 dark:text-slate-500 font-medium border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-8 w-full text-center"
      >
        Area untuk Tabel Data atau Grafik
      </p>
    </div>
  </div>
</template>
