// src/directives/vParallax.ts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const vParallax = {
  // Dipanggil saat elemen HTML dimasukkan ke dalam halaman
  mounted(el: HTMLElement, binding: any) {
    // Membaca nilai yang kita berikan, default ke 100px jika kosong
    const yOffset = binding.value?.y || 100;
    const scrub = binding.value?.scrub ?? true;
    const opacity = binding.value?.opacity ?? 1;

    const animation = gsap.to(el, {
      y: yOffset,
      opacity: opacity,
      ease: "none",
      scrollTrigger: {
        trigger: el.parentElement || el, // Aktif saat pembungkusnya masuk layar
        start: "top bottom", // Mulai saat elemen menyentuh bawah layar
        end: "bottom top", // Berhenti saat elemen menyentuh atas layar
        scrub: scrub,
      },
    });

    // Simpan data animasi ke dalam elemen agar bisa dibersihkan nanti
    (el as any)._parallaxAnim = animation;
  },

  // Dipanggil saat pindah halaman (Mencegah Memory Leak)
  unmounted(el: HTMLElement) {
    if ((el as any)._parallaxAnim) {
      (el as any)._parallaxAnim.scrollTrigger?.kill();
      (el as any)._parallaxAnim.kill();
    }
  },
};
