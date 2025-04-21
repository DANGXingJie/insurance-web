<template>
  <div class="flex flex-col h-full">
    <div class="flex flex-col md:fixed md:top-0 md:w-full md:z-50">
      <NavigationBar />
    </div>
    <div class="min-h-screen flex-1 md:mt-12">
      <router-view></router-view>
    </div>
    <div class="h-[336px]">
      <BottomNavigation />
    </div>
  </div>
</template>
<script setup lang="ts">
import BottomNavigation from '@/components/BottomNavigation.vue';
</script>

<style scoped></style>