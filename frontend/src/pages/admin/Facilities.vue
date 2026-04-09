<template>
  <div class="space-y-6">
    <div
      class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
    >
      <div>
        <h1 class="text-2xl font-bold text-slate-900 dark:text-white">
          Kelola Fasilitas
        </h1>
        <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Tambahkan dan perbarui galeri fasilitas madrasah.
        </p>
      </div>
      <button
        @click="openModal('add')"
        class="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors shadow-sm shadow-blue-600/20"
      >
        <PlusIcon class="h-5 w-5" />
        Tambah Fasilitas
      </button>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      <div
        v-for="facility in facilitiesList"
        :key="facility.id"
        class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow group relative"
      >
        <div
          class="aspect-[4/3] bg-slate-100 dark:bg-slate-700 relative overflow-hidden"
        >
          <img
            v-if="facility.image"
            :src="facility.image"
            :alt="facility.name"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div
            v-else
            class="w-full h-full flex items-center justify-center text-slate-400"
          >
            <ImageIcon class="h-8 w-8 opacity-50" />
          </div>

          <div
            class="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3"
          >
            <button
              @click="openModal('edit', facility)"
              class="p-2 bg-white text-blue-600 hover:bg-blue-50 rounded-lg shadow-sm transition-colors"
              title="Edit"
            >
              <EditIcon class="h-5 w-5" />
            </button>
            <button
              @click="deleteFacility(facility.id)"
              class="p-2 bg-white text-red-600 hover:bg-red-50 rounded-lg shadow-sm transition-colors"
              title="Hapus"
            >
              <TrashIcon class="h-5 w-5" />
            </button>
          </div>
        </div>

        <div class="p-4">
          <h3 class="font-bold text-slate-900 dark:text-white truncate">
            {{ facility.name }}
          </h3>
          <p
            class="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-2"
          >
            {{ facility.description || "Tidak ada deskripsi" }}
          </p>
        </div>
      </div>
    </div>

    <div
      v-if="facilitiesList.length === 0"
      class="text-center py-16 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700"
    >
      <BuildingIcon
        class="h-12 w-12 mx-auto text-slate-300 dark:text-slate-600 mb-4"
      />
      <h3 class="text-lg font-medium text-slate-900 dark:text-white">
        Belum Ada Fasilitas
      </h3>
      <p class="text-slate-500 mt-1">
        Klik tombol "Tambah Fasilitas" untuk mulai mengisi data.
      </p>
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
        class="relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-full max-w-lg overflow-hidden flex flex-col"
      >
        <div
          class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center"
        >
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">
            {{
              modalMode === "add" ? "Tambah Fasilitas Baru" : "Edit Fasilitas"
            }}
          </h3>
          <button
            @click="closeModal"
            class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
          >
            <XIcon class="h-5 w-5" />
          </button>
        </div>

        <div class="p-6 overflow-y-auto">
          <form @submit.prevent="saveFacility" class="space-y-4">
            <div>
              <label
                class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                >Nama Fasilitas</label
              >
              <input
                v-model="formData.name"
                type="text"
                required
                class="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
                placeholder="Contoh: Perpustakaan Digital"
              />
            </div>

            <div>
              <label
                class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                >Foto Fasilitas</label
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
                    >Klik untuk unggah foto</span
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
                >Deskripsi Singkat (Opsional)</label
              >
              <textarea
                v-model="formData.description"
                rows="3"
                class="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
                placeholder="Fasilitas dilengkapi dengan..."
              ></textarea>
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
            @click="saveFacility"
            type="button"
            class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium shadow-sm transition-colors flex items-center gap-2"
          >
            <SaveIcon class="h-4 w-4" />
            Simpan
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
  Building2 as BuildingIcon,
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
  name: "",
  image: "",
  description: "",
});

// Data Dummy
const facilitiesList = ref([
  {
    id: "1",
    name: "Perpustakaan Madrasah",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=500&q=80",
    description: "Koleksi buku lengkap untuk menunjang pembelajaran siswa.",
  },
  {
    id: "2",
    name: "Laboratorium Komputer",
    image:
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=500&q=80",
    description: "Dilengkapi dengan 30 unit PC berstandar terkini.",
  },
]);

const openModal = (mode: "add" | "edit", item?: any) => {
  modalMode.value = mode;
  if (mode === "edit" && item) {
    formData.id = item.id;
    formData.name = item.name;
    formData.image = item.image;
    formData.description = item.description;
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
  formData.name = "";
  formData.image = "";
  formData.description = "";
};

const handleFileUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    formData.image = URL.createObjectURL(file);
  }
};

const saveFacility = () => {
  if (!formData.name) {
    toast.error("Nama fasilitas tidak boleh kosong!");
    return;
  }

  if (modalMode.value === "add") {
    facilitiesList.value.push({
      id: Date.now().toString(),
      name: formData.name,
      image: formData.image,
      description: formData.description,
    });
    toast.success("Fasilitas baru berhasil ditambahkan!");
  } else {
    const index = facilitiesList.value.findIndex((f) => f.id === formData.id);
    if (index !== -1) {
      facilitiesList.value[index].name = formData.name;
      facilitiesList.value[index].image = formData.image;
      facilitiesList.value[index].description = formData.description;
      toast.success("Data fasilitas berhasil diperbarui!");
    }
  }
  closeModal();
};

const deleteFacility = (id: string) => {
  if (confirm("Apakah Anda yakin ingin menghapus fasilitas ini?")) {
    facilitiesList.value = facilitiesList.value.filter((f) => f.id !== id);
    toast.info("Fasilitas telah dihapus dari daftar.");
  }
};
</script>
