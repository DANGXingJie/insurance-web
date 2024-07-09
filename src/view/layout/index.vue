<template>
  <NavigationBar />
  <div class="h-[800px]">
    <router-view></router-view>
  </div>
  <BottomNavigation />
</template>

<script setup lang="ts">
import BottomNavigation from '@/components/BottomNavigation.vue';
</script>

<style scoped></style>