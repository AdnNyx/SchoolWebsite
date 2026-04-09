<template>
  <div
    class="fixed top-5 right-5 z-[100] flex flex-col gap-3 pointer-events-none w-full max-w-sm px-4 sm:px-0"
  >
    <transition-group name="toast" tag="div" class="flex flex-col gap-3">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="pointer-events-auto flex items-center gap-3 p-4 rounded-xl shadow-lg backdrop-blur-md border transition-all"
        :class="{
          'bg-white/90 dark:bg-slate-800/90 border-emerald-200 dark:border-emerald-800/50 text-slate-800 dark:text-white':
            toast.type === 'success',
          'bg-white/90 dark:bg-slate-800/90 border-red-200 dark:border-red-800/50 text-slate-800 dark:text-white':
            toast.type === 'error',
          'bg-white/90 dark:bg-slate-800/90 border-blue-200 dark:border-blue-800/50 text-slate-800 dark:text-white':
            toast.type === 'info',
        }"
      >
        <div
          class="shrink-0 flex items-center justify-center h-8 w-8 rounded-full"
          :class="{
            'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400':
              toast.type === 'success',
            'bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-400':
              toast.type === 'error',
            'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400':
              toast.type === 'info',
          }"
        >
          <svg
            v-if="toast.type === 'success'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <svg
            v-else-if="toast.type === 'error'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <div class="flex-1 text-sm font-medium">
          {{ toast.message }}
        </div>

        <button
          @click="removeToast(toast.id)"
          class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { useToast } from "../../composables/useToast";

const { toasts, removeToast } = useToast();
</script>

<style scoped>
/* Animasi masuk dan keluar yang halus seperti pegas (spring) */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.toast-enter-from {
  opacity: 0;
  transform: translateX(100%) scale(0.9);
}
.toast-leave-to {
  opacity: 0;
  transform: translateX(100%) scale(0.9);
}
</style>
