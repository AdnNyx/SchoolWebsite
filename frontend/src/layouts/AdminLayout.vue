<template>
  <div class="min-h-screen bg-slate-100 flex">
    <aside class="w-64 bg-slate-900 text-white p-6 hidden md:block">
      <h2 class="text-xl font-bold mb-8">Panel Admin</h2>
      <nav class="flex flex-col gap-4 text-sm text-slate-300">
        <router-link to="/admin/dashboard" class="hover:text-white"
          >Dashboard</router-link
        >
        <a href="#" class="hover:text-white">Kelola Berita</a>
      </nav>
    </aside>

    <main class="flex-1 p-8">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts"></script>
