<template>
  <div class="space-y-6 max-w-4xl">
    <div>
      <h1 class="text-2xl font-bold text-slate-900 dark:text-white">
        Pengaturan Beranda
      </h1>
      <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">
        Kelola informasi profil Kepala Sekolah dan pesan sambutan di halaman
        utama.
      </p>
    </div>

    <div
      class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 sm:p-8"
    >
      <form @submit.prevent="saveSettings" class="space-y-8">
        <div>
          <h3
            class="text-lg font-semibold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-700 pb-2"
          >
            Foto Kepala Sekolah
          </h3>
          <div class="flex flex-col sm:flex-row gap-6 items-start">
            <div class="shrink-0">
              <div
                class="w-32 h-40 md:w-40 md:h-48 rounded-xl bg-slate-100 dark:bg-slate-700 border-2 border-dashed border-slate-300 dark:border-slate-600 overflow-hidden flex flex-col items-center justify-center text-center relative group"
              >
                <img
                  v-if="formData.photoUrl"
                  :src="formData.photoUrl"
                  alt="Kepala Sekolah"
                  class="w-full h-full object-cover"
                />
                <div v-else class="text-slate-400 p-4">
                  <UserIcon class="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <span class="text-xs">Belum ada foto</span>
                </div>

                <div
                  v-if="formData.photoUrl"
                  class="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                >
                  <button
                    type="button"
                    @click="formData.photoUrl = ''"
                    class="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-sm"
                  >
                    <TrashIcon class="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <div class="flex-1 space-y-3">
              <label
                class="block text-sm font-medium text-slate-700 dark:text-slate-300"
                >Unggah Foto Baru</label
              >
              <input
                type="file"
                accept="image/*"
                @change="handlePhotoUpload"
                class="block w-full text-sm text-slate-500 dark:text-slate-400 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 dark:file:bg-blue-900/30 dark:file:text-blue-400 hover:file:bg-blue-100 dark:hover:file:bg-blue-900/50 transition-all"
              />
              <p class="text-xs text-slate-500 dark:text-slate-400">
                Format yang didukung: JPG, PNG, WEBP. Maksimal ukuran 2MB.
                Resolusi terbaik: 3:4 (Portrait).
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3
            class="text-lg font-semibold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-700 pb-2"
          >
            Informasi Teks
          </h3>
          <div class="space-y-4">
            <div>
              <label
                class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                >Nama Kepala Sekolah (beserta gelar)</label
              >
              <input
                v-model="formData.name"
                type="text"
                placeholder="Contoh: H. Ahmad Fulan, S.Pd.I., M.Pd."
                class="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label
                class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                >Pesan Sambutan</label
              >
              <textarea
                v-model="formData.message"
                rows="5"
                placeholder="Tuliskan kata sambutan atau visi misi singkat madrasah di sini..."
                class="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
              ></textarea>
            </div>
          </div>
        </div>

        <div
          class="pt-4 flex items-center justify-end gap-3 border-t border-slate-100 dark:border-slate-700"
        >
          <button
            type="button"
            @click="resetForm"
            class="px-5 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors"
          >
            Batal
          </button>
          <button
            type="submit"
            :disabled="isSaving"
            class="px-6 py-2.5 text-sm font-bold bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-xl transition-all shadow-sm shadow-blue-500/30 flex items-center gap-2"
          >
            <SaveIcon class="h-4 w-4" v-if="!isSaving" />
            <span v-if="isSaving" class="animate-pulse">Menyimpan...</span>
            <span v-else>Simpan Perubahan</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import {
  User as UserIcon,
  Trash2 as TrashIcon,
  Save as SaveIcon,
} from "lucide-vue-next";
import { useToast } from "../../composables/useToast";

const isSaving = ref(false);
const toast = useToast();

const formData = reactive({
  photoUrl: "",
  name: "Bpk. Nama Kepala Sekolah, S.Pd.",
  message:
    "Selamat datang di website resmi MI Al-Hidayah Kemuning. Kami berkomitmen mencetak generasi yang cerdas, berakhlak mulia, dan berwawasan teknologi.",
});

const handlePhotoUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    formData.photoUrl = URL.createObjectURL(file);
  }
};

const saveSettings = () => {
  if (!formData.name || !formData.message) {
    toast.error("Nama dan Pesan Sambutan tidak boleh kosong!");
    return;
  }

  isSaving.value = true;

  setTimeout(() => {
    isSaving.value = false;
    toast.success("Pengaturan Beranda berhasil disimpan!");
  }, 1000);
};

const resetForm = () => {
  if (confirm("Batalkan perubahan?")) {
    formData.name = "";
    formData.message = "";
    formData.photoUrl = "";
    toast.info("Perubahan dibatalkan, form dikosongkan.");
  }
};
</script>
