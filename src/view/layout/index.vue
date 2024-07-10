<template>
  <div class="flex flex-col h-full">
    <div class="flex flex-col">
      <NavigationBar />
    </div>
    <div class="min-h-screen flex-1">
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