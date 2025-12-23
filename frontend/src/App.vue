<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from './stores/auth';
import AppFooter from './components/AppFooter.vue'

const authStore = useAuthStore();

onMounted(async () => {
  await authStore.checkAuth();
});
</script>

<template>
  <div class="min-h-screen flex flex-col bg-[#f8f9fa] text-gray-900 font-sans">
    
    <div class="flex-grow flex flex-col w-full">
      <router-view />
    </div>

    <AppFooter />
    
  </div>
</template>