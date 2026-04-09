<template>
  <div class="space-y-6">
    <div
      class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
    >
      <div>
        <h1 class="text-2xl font-bold text-slate-900 dark:text-white">
          Kelola Berita
        </h1>
        <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Tambahkan, ubah, atau hapus artikel berita sekolah.
        </p>
      </div>
      <button
        @click="openModal('add')"
        class="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors shadow-sm shadow-blue-600/20"
      >
        <PlusIcon class="h-5 w-5" />
        Tambah Berita
      </button>
    </div>

    <div
      class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden"
    >
      <div class="overflow-x-auto">
        <table
          class="w-full text-left text-sm text-slate-600 dark:text-slate-400"
        >
          <thead
            class="bg-slate-50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-700"
          >
            <tr>
              <th scope="col" class="px-6 py-4">Judul Berita</th>
              <th scope="col" class="px-6 py-4">Tanggal</th>
              <th scope="col" class="px-6 py-4">Status</th>
              <th scope="col" class="px-6 py-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr
              v-for="news in newsList"
              :key="news.id"
              class="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
            >
              <td class="px-6 py-4">
                <div class="flex items-center gap-3">
                  <div
                    class="h-10 w-10 rounded-lg bg-slate-100 dark:bg-slate-700 overflow-hidden shrink-0"
                  >
                    <img
                      :src="news.image"
                      alt="Thumbnail"
                      class="h-full w-full object-cover"
                      v-if="news.image"
                    />
                    <ImageIcon v-else class="h-5 w-5 m-2.5 text-slate-400" />
                  </div>
                  <span
                    class="font-medium text-slate-900 dark:text-white line-clamp-1"
                    >{{ news.title }}</span
                  >
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">{{ news.date }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  class="px-2.5 py-1 rounded-full text-xs font-medium"
                  :class="
                    news.status === 'Published'
                      ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                      : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                  "
                >
                  {{ news.status }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right">
                <div class="flex items-center justify-end gap-2">
                  <button
                    @click="openModal('edit', news)"
                    class="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    title="Edit"
                  >
                    <EditIcon class="h-4 w-4" />
                  </button>
                  <button
                    @click="deleteNews(news.id)"
                    class="p-2 text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                    title="Hapus"
                  >
                    <TrashIcon class="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div
      v-if="isModalOpen"
      class="fixed inset-0 z-[60] flex items-center justify-center px-4"
    >
      <div
        class="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
        @click="closeModal"
      ></div>

      <div
        class="relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
      >
        <div
          class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center"
        >
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">
            {{ modalMode === "add" ? "Tambah Berita Baru" : "Edit Berita" }}
          </h3>
          <button
            @click="closeModal"
            class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
          >
            <XIcon class="h-5 w-5" />
          </button>
        </div>

        <div class="p-6 overflow-y-auto">
          <form @submit.prevent="saveNews" class="space-y-4">
            <div>
              <label
                class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                >Judul Artikel</label
              >
              <input
                v-model="formData.title"
                type="text"
                required
                class="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
                placeholder="Contoh: Prestasi Siswa MI Al-Hidayah..."
              />
            </div>

            <div>
              <label
                class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                >Gambar Utama (Cover)</label
              >
              <div
                class="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group"
              >
                <div
                  v-if="formData.image"
                  class="relative w-full aspect-video rounded-lg overflow-hidden mb-3"
                >
                  <img
                    :src="formData.image"
                    class="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    @click.stop="formData.image = ''"
                    class="absolute top-2 right-2 p-1.5 bg-red-600 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <TrashIcon class="h-4 w-4" />
                  </button>
                </div>
                <div v-else class="flex flex-col items-center">
                  <UploadCloudIcon class="h-8 w-8 text-slate-400 mb-2" />
                  <span
                    class="text-sm font-medium text-blue-600 dark:text-blue-400"
                    >Klik untuk unggah gambar</span
                  >
                  <span class="text-xs text-slate-500 mt-1"
                    >PNG, JPG up to 2MB</span
                  >
                </div>
                <input
                  type="file"
                  accept="image/*"
                  class="hidden"
                  @change="handleFileUpload"
                />
              </div>
            </div>

            <div>
              <label
                class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                >Isi Berita</label
              >
              <textarea
                v-model="formData.content"
                required
                rows="6"
                class="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
                placeholder="Tulis isi berita di sini..."
              ></textarea>
            </div>

            <div>
              <label
                class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                >Status</label
              >
              <select
                v-model="formData.status"
                class="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
              >
                <option value="Published">Publikasikan (Published)</option>
                <option value="Draft">Simpan sebagai Draft</option>
              </select>
            </div>
          </form>
        </div>

        <div
          class="px-6 py-4 border-t border-slate-200 dark:border-slate-700 flex justify-end gap-3 bg-slate-50 dark:bg-slate-800/50"
        >
          <button
            @click="closeModal"
            type="button"
            class="px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl font-medium transition-colors"
          >
            Batal
          </button>
          <button
            @click="saveNews"
            type="button"
            class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium shadow-sm transition-colors flex items-center gap-2"
          >
            <SaveIcon class="h-4 w-4" />
            Simpan Berita
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import {
  Plus as PlusIcon,
  Edit as EditIcon,
  Trash2 as TrashIcon,
  Image as ImageIcon,
  X as XIcon,
  UploadCloud as UploadCloudIcon,
  Save as SaveIcon,
} from "lucide-vue-next";
import { useToast } from "../../composables/useToast";

const isModalOpen = ref(false);
const modalMode = ref<"add" | "edit">("add");
const toast = useToast();
const formData = reactive({
  id: "",
  title: "",
  image: "",
  content: "",
  status: "Published",
});

// Data Dummy (Nanti akan diganti dengan API/Backend)
const newsList = ref([
  {
    id: "1",
    title: "Pelaksanaan Ujian Akhir Semester Ganjil Tahun Ajaran 2026/2027",
    date: "10 Apr 2026",
    status: "Published",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&q=80",
    content: "Lorem ipsum...",
  },
  {
    id: "2",
    title: "Rapat Wali Murid Persiapan Perpisahan Kelas 6",
    date: "05 Apr 2026",
    status: "Draft",
    image: "",
    content: "Lorem ipsum...",
  },
]);

const openModal = (mode: "add" | "edit", newsItem?: any) => {
  modalMode.value = mode;

  if (mode === "edit" && newsItem) {
    formData.id = newsItem.id;
    formData.title = newsItem.title;
    formData.image = newsItem.image;
    formData.status = newsItem.status;
    formData.content = newsItem.content;
  } else {
    resetForm();
  }

  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  setTimeout(resetForm, 300);
};

const resetForm = () => {
  formData.id = "";
  formData.title = "";
  formData.image = "";
  formData.content = "";
  formData.status = "Published";
};

const handleFileUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    formData.image = URL.createObjectURL(file);
  }
};

const saveNews = () => {
  if (!formData.title) {
    toast.error("Judul berita tidak boleh kosong!");
    return;
  }

  if (modalMode.value === "add") {
    newsList.value.unshift({
      id: Date.now().toString(),
      title: formData.title,
      date: new Date().toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      status: formData.status,
      image: formData.image,
      content: formData.content,
    });
    toast.success("Berita berhasil ditambahkan!");
  } else {
    const index = newsList.value.findIndex((n) => n.id === formData.id);
    if (index !== -1) {
      newsList.value[index].title = formData.title;
      newsList.value[index].status = formData.status;
      newsList.value[index].image = formData.image;
      newsList.value[index].content = formData.content;
      toast.success("Berita berhasil diperbarui!");
    }
  }

  closeModal();
};

const deleteNews = (id: string) => {
  if (
    confirm(
      "Apakah Anda yakin ingin menghapus berita ini? Tindakan ini tidak dapat dibatalkan.",
    )
  ) {
    newsList.value = newsList.value.filter((n) => n.id !== id);
    toast.info("Berita telah dihapus.");
  }
};
</script>
