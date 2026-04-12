<template>
  <section
    id="profil"
    class="scroll-mt-24 py-24 px-6 transition-colors duration-500"
  >
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div
          class="kepsek-img opacity-0 -translate-x-10 lg:col-span-5 relative"
        >
          <div class="kepsek-float relative z-10">
            <div
              class="absolute inset-0 bg-blue-600 rounded-3xl transform translate-x-4 translate-y-4 dark:opacity-80 -z-10"
            ></div>
            <img
              src="/image/kepalasekolah.jpeg"
              alt="Kepala Sekolah"
              class="w-full h-[500px] object-cover rounded-3xl shadow-xl border-4 border-white dark:border-slate-800 transition-colors duration-500"
            />
            <div
              class="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 dark:border-slate-700 text-center transition-colors duration-500"
            >
              <h4 class="font-bold text-slate-900 dark:text-white text-lg">
                Khoeru Khotibul Umam S. Sos. I
              </h4>
              <p class="text-blue-600 dark:text-blue-400 text-sm font-semibold">
                Kepala Sekolah
              </p>
            </div>
          </div>
        </div>

        <div
          class="kepsek-text opacity-0 translate-x-10 lg:col-span-7 space-y-6"
        >
          <h2
            class="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm mb-2"
          >
            Sambutan Hangat
          </h2>
          <h3
            class="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight"
          >
            Selamat Datang di Portal Resmi Kami
          </h3>
          <div
            class="text-slate-600 dark:text-slate-400 space-y-4 text-lg leading-relaxed relative"
          >
            <svg
              class="absolute -top-6 -left-8 w-16 h-16 text-blue-100 dark:text-slate-800 -z-10"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path
                d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
              />
            </svg>
            <p>
              Assalamu'alaikum Warahmatullahi Wabarakatuh. Puji syukur ke
              hadirat Allah SWT, karena atas rahmat-Nya website resmi MI
              Al-Hidayah Kemuning ini dapat terwujud.
            </p>
            <p>
              Di era digitalisasi saat ini, website sekolah memiliki peran yang
              sangat penting sebagai jendela informasi dan komunikasi. Kami
              berkomitmen untuk terus berinovasi dalam mendidik putra-putri
              generasi bangsa.
            </p>
            <p class="font-semibold text-slate-900 dark:text-white">
              Mari bersama kita wujudkan madrasah yang hebat dan bermartabat!
            </p>
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
  gsap.to(".kepsek-img", {
    scrollTrigger: { trigger: ".kepsek-img", start: "top 80%" },
    opacity: 1,
    x: 0,
    duration: 1.2,
    ease: "power3.out",
  });

  gsap.to(".kepsek-text", {
    scrollTrigger: { trigger: ".kepsek-text", start: "top 80%" },
    opacity: 1,
    x: 0,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.2,
  });

  gsap.to(".kepsek-float", {
    y: -15,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
});
</script>
