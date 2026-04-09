<template>
  <div class="space-y-6 max-w-4xl">
    <div>
      <h1 class="text-2xl font-bold text-slate-900 dark:text-white">
        Tentang Kami & Kontak
      </h1>
      <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">
        Perbarui informasi kontak, alamat madrasah, dan tautan media sosial.
      </p>
    </div>

    <form @submit.prevent="saveSettings" class="space-y-6">
      <div
        class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 sm:p-8"
      >
        <h3
          class="text-lg font-semibold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center gap-2"
        >
          <MapPinIcon class="h-5 w-5 text-blue-600 dark:text-blue-400" />
          Informasi Kontak & Alamat
        </h3>

        <div class="space-y-5">
          <div>
            <label
              class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
              >Alamat Lengkap Madrasah</label
            >
            <textarea
              v-model="formData.address"
              rows="3"
              required
              placeholder="Contoh: Jl. Raya Kemuning No. 123, Desa Kemuning..."
              class="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
            ></textarea>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label
                class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                >Alamat Email</label
              >
              <div class="relative">
                <div
                  class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"
                >
                  <MailIcon class="h-5 w-5 text-slate-400" />
                </div>
                <input
                  v-model="formData.email"
                  type="email"
                  placeholder="info@mialhidayahkemuning.sch.id"
                  class="w-full pl-11 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label
                class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                >No. Telepon / WhatsApp</label
              >
              <div class="relative">
                <div
                  class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"
                >
                  <PhoneIcon class="h-5 w-5 text-slate-400" />
                </div>
                <input
                  v-model="formData.phone"
                  type="text"
                  placeholder="0812-3456-7890"
                  class="w-full pl-11 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 sm:p-8"
      >
        <h3
          class="text-lg font-semibold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center gap-2"
        >
          <LinkIcon class="h-5 w-5 text-blue-600 dark:text-blue-400" />
          Tautan Media Sosial
        </h3>

        <div class="space-y-5">
          <div>
            <label
              class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
              >Link Facebook</label
            >
            <input
              v-model="formData.facebook"
              type="url"
              placeholder="https://facebook.com/..."
              class="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label
              class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
              >Link Instagram</label
            >
            <input
              v-model="formData.instagram"
              type="url"
              placeholder="https://instagram.com/..."
              class="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label
              class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
              >Link YouTube</label
            >
            <input
              v-model="formData.youtube"
              type="url"
              placeholder="https://youtube.com/..."
              class="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
            />
          </div>
        </div>
      </div>

      <div class="flex items-center justify-end gap-3 pt-2">
        <button
          type="button"
          @click="resetForm"
          class="px-5 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors"
        >
          Kembalikan Semula
        </button>
        <button
          type="submit"
          :disabled="isSaving"
          class="px-6 py-2.5 text-sm font-bold bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-xl transition-all shadow-sm shadow-blue-500/30 flex items-center gap-2"
        >
          <SaveIcon class="h-4 w-4" v-if="!isSaving" />
          <span v-if="isSaving" class="animate-pulse">Menyimpan...</span>
          <span v-else>Simpan Pengaturan</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import {
  MapPin as MapPinIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  Link as LinkIcon,
  Save as SaveIcon,
} from "lucide-vue-next";
import { useToast } from "../../composables/useToast";

const isSaving = ref(false);
// 2. INISIALISASI TOAST
const toast = useToast();

// State Data Form
const formData = reactive({
  address:
    "Jl. Pendidikan No. 123, Desa Kemuning, Kec. Contoh, Kab. Pekalongan, Jawa Tengah",
  email: "mialhidayah@example.com",
  phone: "+62 812-3456-7890",
  facebook: "https://facebook.com/mialhidayah",
  instagram: "https://instagram.com/mialhidayah",
  youtube: "https://youtube.com/c/mialhidayah",
});

const originalData = { ...formData };

const saveSettings = () => {
  isSaving.value = true;

  setTimeout(() => {
    isSaving.value = false;
    toast.success("Informasi Kontak & Media Sosial berhasil diperbarui!");
  }, 1000);
};

const resetForm = () => {
  if (confirm("Kembalikan form ke data terakhir yang tersimpan?")) {
    Object.assign(formData, originalData);
    toast.info("Data dikembalikan ke pengaturan awal.");
  }
};
</script>
