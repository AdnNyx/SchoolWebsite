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
          class="about-anim text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 opacity-0 translate-y-8"
        >
          Tentang <span class="text-blue-600 dark:text-blue-400">Kami</span>
        </h1>
        <p
          class="about-anim text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto opacity-0 translate-y-8"
        >
          Kami siap melayani dan memberikan informasi terbaik. Jangan ragu untuk
          mengunjungi madrasah kami atau menghubungi layanan pusat informasi.
        </p>
      </div>
    </header>

    <section class="px-6 max-w-6xl mx-auto">
      <div class="about-section grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
        <div class="lg:col-span-5">
          <ContactInfo />
        </div>

        <div class="lg:col-span-7">
          <MapSection />
        </div>
      </div>

      <div class="about-section max-w-4xl mx-auto">
        <ContactForm />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactInfo from "../../components/public/about/ContactInfo.vue";
import MapSection from "../../components/public/about/MapSection.vue";
import ContactForm from "../../components/public/about/ContactForm.vue";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.to(".about-anim", {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  });

  const sections = gsap.utils.toArray(".about-section");

  sections.forEach((section: any) => {
    const cards = section.querySelectorAll(".about-card");
    if (cards.length > 0) {
      gsap.to(cards, {
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }
  });
});
</script>
