<template>
  <div class="space-y-8 flex flex-col h-full">
    <div
      class="profile-card opacity-0 translate-y-10 flex-1 p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-xl shadow-blue-900/30 transition-all duration-300"
    >
      <h4 class="text-xl font-bold mb-4 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-blue-300"
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
      <p class="italic text-blue-50 leading-relaxed text-lg">
        "Terwujudnya generasi yang unggul dalam prestasi, mulia dalam akhlak,
        dan mandiri dalam beribadah."
      </p>
    </div>

    <div
      class="profile-card opacity-0 translate-y-10 p-8 rounded-3xl bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white shadow-xl shadow-slate-200/80 dark:shadow-none flex-1 transition-all duration-300"
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
      <ul class="space-y-4 text-sm text-slate-600 dark:text-slate-400">
        <li class="flex gap-3 items-start">
          <span
            class="text-blue-500 font-bold bg-blue-50 dark:bg-slate-700 px-2 py-0.5 rounded"
            >1</span
          >
          Menyelenggarakan pendidikan Islam yang berkualitas dan berdaya saing.
        </li>
        <li class="flex gap-3 items-start">
          <span
            class="text-blue-500 font-bold bg-blue-50 dark:bg-slate-700 px-2 py-0.5 rounded"
            >2</span
          >
          Membiasakan adab islami dalam kehidupan sehari-hari.
        </li>
        <li class="flex gap-3 items-start">
          <span
            class="text-blue-500 font-bold bg-blue-50 dark:bg-slate-700 px-2 py-0.5 rounded"
            >3</span
          >
          Mengembangkan minat dan bakat melalui ekstrakurikuler terpadu.
        </li>
      </ul>
    </div>
  </div>
</template>
