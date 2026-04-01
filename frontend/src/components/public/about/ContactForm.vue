<template>
  <div
    class="about-card opacity-0 translate-y-10 bg-white dark:bg-slate-800 p-8 rounded-3xl border-2 border-slate-300 dark:border-slate-700 shadow-xl shadow-slate-200/80 dark:shadow-none transition-all duration-300"
  >
    <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-6">
      Kirim Pesan
    </h3>

    <form @submit.prevent="submitForm" class="space-y-5">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div class="space-y-1">
          <label
            class="text-sm font-semibold text-slate-700 dark:text-slate-300"
            >Nama Lengkap</label
          >
          <input
            type="text"
            placeholder="Masukkan nama..."
            class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white transition-colors"
            required
          />
        </div>
        <div class="space-y-1">
          <label
            class="text-sm font-semibold text-slate-700 dark:text-slate-300"
            >Email / WhatsApp</label
          >
          <input
            type="text"
            placeholder="Kontak yang bisa dihubungi..."
            class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white transition-colors"
            required
          />
        </div>
      </div>

      <div class="space-y-1">
        <label class="text-sm font-semibold text-slate-700 dark:text-slate-300"
          >Pesan</label
        >
        <textarea
          rows="4"
          placeholder="Tuliskan pertanyaan atau pesan Anda di sini..."
          class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white transition-colors resize-none"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        class="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-colors flex justify-center items-center gap-2"
      >
        Kirim Pesan Sekarang
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
const submitForm = () => {
  alert("Simulasi: Pesan berhasil dikirim!");
};
</script>
