<template>
  <div class="mt-6 md:mt-0 flex w-[260px] justify-evenly cursor-pointer">
    <div class="w-[40px] h-[40px] rounded-[20px] border border-bgColorLight flex items-center justify-center opacity-100">
      <icon-facebook :style="{ fontSize: '16px', color: 'text-dark' }" />
    </div>
    <div class="w-[40px] h-[40px] rounded-[20px] border border-bgColorLight flex items-center justify-center opacity-100">
      <icon-twitter :style="{ fontSize: '16px', color: 'text-dark' }" />

    </div>
    <div class="w-[40px] h-[40px] rounded-[20px] border border-bgColorLight flex items-center justify-center opacity-100">
      <icon-github :style="{ fontSize: '16px', color: 'text-dark' }" />

    </div>
    <div class="w-[40px] h-[40px] rounded-[20px] border border-bgColorLight flex items-center justify-center opacity-100">
      <icon-google :style="{ fontSize: '16px', color: 'text-dark' }" />
    </div>
    <div class="w-[40px] h-[40px] rounded-[20px] border border-bgColorLight flex items-center justify-center opacity-100">
      <icon-qq-zone :style="{ fontSize: '16px', color: 'text-dark' }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconFacebook, IconTwitter, IconGithub, IconGoogle, IconQqZone } from '@arco-design/web-vue/es/icon'

</script>

<style scoped></style>