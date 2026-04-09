# 🏫 MI Al-Hidayah Kemuning - Official Website

Selamat datang di repositori *Frontend* Website Resmi MI Al-Hidayah Kemuning. Proyek ini dibangun dengan antarmuka yang modern, responsif, dan interaktif untuk memberikan pengalaman terbaik bagi calon siswa, wali murid, dan masyarakat umum dalam mengakses informasi madrasah.

---

## ✨ Fitur Utama

* **Modern UI/UX:** Desain antarmuka yang bersih (*clean design*) dengan sentuhan *Glassmorphism* dan *Bento Grid*.
* **Smooth Scrolling & Parallax:** Pengalaman berselancar yang sangat mulus menggunakan **Lenis** yang dipadukan dengan efek *Parallax* dari **GSAP (GreenSock)**.
* **Dark Mode Support:** Terintegrasi penuh dengan sistem *Light/Dark Mode* yang responsif.
* **Micro-Interactions:** Animasi transisi halaman (*Page Transitions*), teks yang muncul secara sinematik (*Text Reveal*), dan interaksi *hover* yang elegan.
* **Modular Architecture:** Komponen Vue yang dipecah secara rapi agar kode mudah dipelihara (*scalable*).
* **Single Page Application (SPA):** Navigasi instan tanpa *reload* halaman menggunakan **Vue Router**.

---

## 🛠️ Teknologi yang Digunakan

Proyek ini dikembangkan menggunakan *stack modern* terkini:

* **Framework:** [Vue 3](https://vuejs.org/) (Composition API) + [Vite](https://vitejs.dev/)
* **Bahasa:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS v3](https://tailwindcss.com/)
* **Animasi:** [GSAP](https://gsap.com/) & ScrollTrigger
* **Smooth Scroll:** [Lenis](https://github.com/darkroomengineering/lenis)
* **Routing:** Vue Router 4
* **WebGL/3D (Opsional):** Three.js (Untuk partikel latar belakang Hero Section)

---

## 📂 Struktur Direktori Utama

```text
src/
├── assets/         # File gambar statis, CSS global, font
├── components/     # Komponen Vue yang dapat digunakan ulang (Navbar, Footer, Card)
│   ├── public/     # Komponen khusus halaman publik
│   └── admin/      # Komponen khusus portal admin (WIP)
├── composables/    # Fungsi logika Vue yang dapat digunakan ulang (misal: useLenis)
├── directives/     # Custom Vue Directives (misal: v-parallax)
├── layouts/        # Layout utama (PublicLayout, AdminLayout)
├── pages/          # Halaman utama (Home, Profil, Facility, News, AboutUs)
├── router/         # Konfigurasi rute halaman (Vue Router)
└── main.ts         # Titik masuk utama aplikasi (Entry point)

```
## 🚀 Cara Instalasi & Menjalankan Proyek Lokal
Ikuti langkah-langkah berikut untuk menjalankan proyek ini di komputer Anda:
 1. **Clone Repositori**
   ```bash
   git clone https://github.com/AdnNyx/SchoolWebsite.git
   ```
   ```bash
   cd frontend
   ```
 2. **Install Dependensi**
   Pastikan Anda sudah menginstal Node.js. Kemudian jalankan:
   ```bash
   npm install
   
   ```
 3. **Jalankan Server Development (Vite)**
   ```bash
   npm run dev
   
   ```
 4. **Buka di Browser**
   Buka tautan yang muncul di terminal Anda (biasanya http://localhost:5173/).
## 🏗️ Status Pengembangan (Roadmap)
 * [x] Desain Halaman Beranda (Home)
 * [x] Desain Halaman Profil & Visi Misi
 * [x] Desain Halaman Fasilitas
 * [x] Desain Halaman Berita & Filter Kategori
 * [x] Desain Halaman Tentang Kami & Kontak
 * [x] Setup Transisi & Animasi Global
 * [x] Integrasi Halaman Login Admin
 * [x] Pembuatan Dashboard Admin
 * [ ] Integrasi API Backend (PostgreSQL + FastAPI)

**Dikembangkan dengan ❤️ untuk pendidikan yang lebih baik.**
