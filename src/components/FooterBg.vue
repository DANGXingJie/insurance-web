<template>
  <!-- footer背景 -->
  <div class="w-[350px] md:w-[1408px] md:h-[500px] m-auto md:mt-20 mt-12" @click="handleStart">
    <img class="hidden md:block w-[1408px] h-full pb-20" fit="cover" src="@/assets/images/footer.png" />
    <img class="block md:hidden w-[350px] h-full pb-10" fit="cover" src="@/assets/images/footer-h5.png" />
  </div>
</template>

<script setup lang="ts">
const handleStart = () => {
  console.log('start')
}

</script>

<style scoped></style>