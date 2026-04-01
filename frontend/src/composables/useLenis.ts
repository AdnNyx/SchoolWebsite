import Lenis from "lenis";
import { onMounted, onUnmounted } from "vue";
import gsap from "gsap";

export function useLenis() {
  let lenis: any;

  onMounted(() => {
    // Inisialisasi Lenis dengan konfigurasi optimal
    lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false, // Biarkan native scroll di HP
    } as any); // Gunakan 'as any' sementara jika library Lenis belum memiliki file @types penuh

    // Sinkronisasi requestAnimationFrame dengan GSAP Ticker
    // Ini memastikan animasi GSAP dan scroll Lenis berjalan di frame rate yang sama
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  });

  onUnmounted(() => {
    // BERSIHKAN memori saat berpindah ke halaman Admin
    if (lenis) {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    }
  });
}
