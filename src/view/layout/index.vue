<template>
  <div class="min-h-screen flex flex-col">
    <NavigationBar />
    <div class="min-h-screen flex-1">
      <router-view></router-view>
    </div>
    <BottomNavigation />
  </div>
</template>
<script setup lang="ts">
import BottomNavigation from '@/components/BottomNavigation.vue';
</script>

<style scoped></style>