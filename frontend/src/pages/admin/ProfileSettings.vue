<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-2xl font-bold text-slate-900 dark:text-white">
        Halaman Profil
      </h1>
      <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">
        Kelola gambar struktur organisasi dan daftar nama pendidik serta tenaga
        kependidikan.
      </p>
    </div>

    <div
      class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6"
    >
      <div
        class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-4 mb-4"
      >
        <h2
          class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2"
        >
          <NetworkIcon class="h-5 w-5 text-blue-600 dark:text-blue-400" />
          Struktur Organisasi
        </h2>
        <button
          @click="saveOrgChart"
          :disabled="isSavingOrg"
          class="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-xl text-sm font-medium transition-colors shadow-sm flex items-center gap-2"
        >
          <SaveIcon class="h-4 w-4" />
          {{ isSavingOrg ? "Menyimpan..." : "Simpan Bagan" }}
        </button>
      </div>

      <div class="flex flex-col md:flex-row gap-6">
        <div class="w-full md:w-1/3 space-y-3">
          <label
            class="block text-sm font-medium text-slate-700 dark:text-slate-300"
            >Unggah Gambar Bagan</label
          >
          <input
            type="file"
            accept="image/*"
            @change="handleOrgChartUpload"
            class="block w-full text-sm text-slate-500 dark:text-slate-400 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 dark:file:bg-blue-900/30 dark:file:text-blue-400 hover:file:bg-blue-100 transition-all"
          />
          <p class="text-xs text-slate-500 dark:text-slate-400">
            Format yang direkomendasikan: PNG transparan atau JPG beresolusi
            tinggi agar teks pada bagan dapat terbaca jelas.
          </p>
        </div>

        <div
          class="w-full md:w-2/3 bg-slate-50 dark:bg-slate-900/50 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-600 min-h-[250px] flex items-center justify-center relative group p-4 overflow-hidden"
        >
          <img
            v-if="orgChartUrl"
            :src="orgChartUrl"
            alt="Struktur Organisasi"
            class="max-w-full max-h-[400px] object-contain"
          />
          <div v-else class="text-center text-slate-400">
            <ImageIcon class="h-10 w-10 mx-auto mb-2 opacity-30" />
            <p class="text-sm">Pratinjau Gambar Bagan</p>
          </div>

          <button
            v-if="orgChartUrl"
            @click="orgChartUrl = ''"
            class="absolute top-4 right-4 p-2 bg-red-600 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
          >
            <TrashIcon class="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>

    <div
      class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden"
    >
      <div
        class="px-6 py-5 border-b border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
      >
        <h2
          class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2"
        >
          <UsersIcon class="h-5 w-5 text-blue-600 dark:text-blue-400" />
          Guru & Tenaga Kependidikan
        </h2>
        <button
          @click="openTeacherModal('add')"
          class="px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-xl text-sm font-medium transition-colors flex items-center gap-2"
        >
          <PlusIcon class="h-4 w-4" />
          Tambah Staf
        </button>
      </div>

      <div
        class="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <div
          v-for="teacher in teachersList"
          :key="teacher.id"
          class="group flex flex-col items-center p-5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 hover:shadow-md transition-all relative"
        >
          <div
            class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1"
          >
            <button
              @click="openTeacherModal('edit', teacher)"
              class="p-1.5 bg-white dark:bg-slate-800 text-blue-600 rounded-lg shadow-sm hover:bg-blue-50 transition-colors"
            >
              <EditIcon class="h-4 w-4" />
            </button>
            <button
              @click="deleteTeacher(teacher.id)"
              class="p-1.5 bg-white dark:bg-slate-800 text-red-600 rounded-lg shadow-sm hover:bg-red-50 transition-colors"
            >
              <TrashIcon class="h-4 w-4" />
            </button>
          </div>

          <div
            class="w-24 h-24 rounded-full border-4 border-white dark:border-slate-800 shadow-sm overflow-hidden mb-3 bg-slate-200 dark:bg-slate-700"
          >
            <img
              v-if="teacher.image"
              :src="teacher.image"
              :alt="teacher.name"
              class="w-full h-full object-cover"
            />
            <UserIcon v-else class="w-full h-full p-4 text-slate-400" />
          </div>

          <h3
            class="font-bold text-slate-900 dark:text-white text-center text-sm mb-1"
          >
            {{ teacher.name }}
          </h3>
          <p
            class="text-xs font-medium text-blue-600 dark:text-blue-400 text-center px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full"
          >
            {{ teacher.role }}
          </p>
        </div>
      </div>

      <div
        v-if="teachersList.length === 0"
        class="p-12 text-center text-slate-500"
      >
        <UsersIcon class="h-10 w-10 mx-auto mb-3 opacity-20" />
        Belum ada data guru/staf yang ditambahkan.
      </div>
    </div>

    <div
      v-if="isTeacherModalOpen"
      class="fixed inset-0 z-[60] flex items-center justify-center px-4"
    >
      <div
        class="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
        @click="closeTeacherModal"
      ></div>

      <div
        class="relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-full max-w-md overflow-hidden flex flex-col"
      >
        <div
          class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center"
        >
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">
            {{ teacherModalMode === "add" ? "Tambah Guru/Staf" : "Edit Data" }}
          </h3>
          <button
            @click="closeTeacherModal"
            class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
          >
            <XIcon class="h-5 w-5" />
          </button>
        </div>

        <div class="p-6 overflow-y-auto">
          <form @submit.prevent="saveTeacher" class="space-y-4">
            <div class="flex flex-col items-center justify-center mb-6">
              <div
                class="relative w-24 h-24 rounded-full border-2 border-dashed border-slate-300 dark:border-slate-600 flex items-center justify-center bg-slate-50 dark:bg-slate-900 overflow-hidden group cursor-pointer"
              >
                <img
                  v-if="teacherForm.image"
                  :src="teacherForm.image"
                  class="w-full h-full object-cover"
                />
                <UserIcon v-else class="h-8 w-8 text-slate-400" />

                <div
                  class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                >
                  <UploadCloudIcon class="h-6 w-6 text-white" />
                </div>
                <input
                  type="file"
                  accept="image/*"
                  class="absolute inset-0 opacity-0 cursor-pointer"
                  @change="handleTeacherPhotoUpload"
                />
              </div>
              <span class="text-xs text-slate-500 mt-2"
                >Klik untuk ganti foto</span
              >
            </div>

            <div>
              <label
                class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                >Nama Lengkap & Gelar</label
              >
              <input
                v-model="teacherForm.name"
                type="text"
                required
                class="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
                placeholder="Contoh: Siti Aminah, S.Pd."
              />
            </div>

            <div>
              <label
                class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                >Jabatan / Guru Mapel</label
              >
              <input
                v-model="teacherForm.role"
                type="text"
                required
                class="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
                placeholder="Contoh: Guru Kelas 1 / Tata Usaha"
              />
            </div>
          </form>
        </div>

        <div
          class="px-6 py-4 border-t border-slate-200 dark:border-slate-700 flex justify-end gap-3 bg-slate-50 dark:bg-slate-800/50"
        >
          <button
            @click="closeTeacherModal"
            type="button"
            class="px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl font-medium transition-colors"
          >
            Batal
          </button>
          <button
            @click="saveTeacher"
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
  Network as NetworkIcon,
  Users as UsersIcon,
  User as UserIcon,
  Image as ImageIcon,
  Save as SaveIcon,
  Trash2 as TrashIcon,
  Plus as PlusIcon,
  Edit as EditIcon,
  X as XIcon,
  UploadCloud as UploadCloudIcon,
} from "lucide-vue-next";
import { useToast } from "../../composables/useToast";

const toast = useToast();

const orgChartUrl = ref("");
const isSavingOrg = ref(false);

const handleOrgChartUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    orgChartUrl.value = URL.createObjectURL(file);
  }
};

const saveOrgChart = () => {
  isSavingOrg.value = true;
  setTimeout(() => {
    isSavingOrg.value = false;
    toast.success("Struktur Organisasi berhasil diperbarui!");
  }, 1000);
};

const teachersList = ref([
  {
    id: "1",
    name: "Ahmad Muzaki, S.Pd.I",
    role: "Wali Kelas 6",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    id: "2",
    name: "Siti Rohmah, S.Pd",
    role: "Guru Matematika",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    id: "3",
    name: "Budi Santoso, S.Kom",
    role: "Tata Usaha / Operator",
    image: "",
  },
]);

const isTeacherModalOpen = ref(false);
const teacherModalMode = ref<"add" | "edit">("add");
const teacherForm = reactive({
  id: "",
  name: "",
  role: "",
  image: "",
});

const openTeacherModal = (mode: "add" | "edit", teacher?: any) => {
  teacherModalMode.value = mode;
  if (mode === "edit" && teacher) {
    teacherForm.id = teacher.id;
    teacherForm.name = teacher.name;
    teacherForm.role = teacher.role;
    teacherForm.image = teacher.image;
  } else {
    resetTeacherForm();
  }
  isTeacherModalOpen.value = true;
};

const closeTeacherModal = () => {
  isTeacherModalOpen.value = false;
  setTimeout(resetTeacherForm, 300);
};

const resetTeacherForm = () => {
  teacherForm.id = "";
  teacherForm.name = "";
  teacherForm.role = "";
  teacherForm.image = "";
};

const handleTeacherPhotoUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    teacherForm.image = URL.createObjectURL(file);
  }
};

const saveTeacher = () => {
  if (!teacherForm.name || !teacherForm.role) {
    toast.error("Nama dan Jabatan wajib diisi!");
    return;
  }

  if (teacherModalMode.value === "add") {
    teachersList.value.push({
      id: Date.now().toString(),
      name: teacherForm.name,
      role: teacherForm.role,
      image: teacherForm.image,
    });
    toast.success("Data guru/staf berhasil ditambahkan!");
  } else {
    const index = teachersList.value.findIndex((t) => t.id === teacherForm.id);
    if (index !== -1) {
      teachersList.value[index].name = teacherForm.name;
      teachersList.value[index].role = teacherForm.role;
      teachersList.value[index].image = teacherForm.image;
      toast.success("Data guru/staf berhasil diperbarui!");
    }
  }
  closeTeacherModal();
};

const deleteTeacher = (id: string) => {
  if (confirm("Hapus data staf ini?")) {
    teachersList.value = teachersList.value.filter((t) => t.id !== id);
    toast.info("Data guru/staf telah dihapus.");
  }
};
</script>
