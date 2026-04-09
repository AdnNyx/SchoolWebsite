import { ref } from "vue";

// Mendefinisikan tipe data untuk Toast
export type ToastType = "success" | "error" | "info";

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

// State global menggunakan ref
const toasts = ref<Toast[]>([]);

export function useToast() {
  const addToast = (
    message: string,
    type: ToastType = "success",
    duration = 3000,
  ) => {
    const id = Date.now().toString();
    toasts.value.push({ id, message, type });

    // Otomatis hapus toast setelah durasi habis
    setTimeout(() => {
      removeToast(id);
    }, duration);
  };

  const removeToast = (id: string) => {
    toasts.value = toasts.value.filter((t) => t.id !== id);
  };

  const success = (message: string, duration?: number) =>
    addToast(message, "success", duration);
  const error = (message: string, duration?: number) =>
    addToast(message, "error", duration);
  const info = (message: string, duration?: number) =>
    addToast(message, "info", duration);

  return {
    toasts,
    success,
    error,
    info,
    removeToast,
  };
}
