<template>
  <div
    class="about-card opacity-0 translate-y-10 bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-3xl border-2 border-slate-300 dark:border-slate-700 shadow-xl shadow-slate-200/80 dark:shadow-none h-full transition-all duration-300 flex flex-col"
  >
    <div
      class="relative w-full h-64 md:h-full min-h-[300px] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9993975958255!2d109.23024967430845!3d-6.890673967427746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fc74c003fb98b%3A0x94cd612bcf9f633a!2sMI%20Al%20Hidayah%20Bulu%20Kemuning!5e0!3m2!1sid!2sid!4v1775049359959!5m2!1sid!2sid"
        class="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
        allowfullscreen="false"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      >
      </iframe>

      <div
        class="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-2xl pointer-events-none"
      ></div>
    </div>
  </div>
</template>
