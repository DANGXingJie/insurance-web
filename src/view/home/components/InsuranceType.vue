<template>
  <div class="hidden md:w-[1200px] md:h-full md:block">
    <img class="w-[1200px] h-full" fit="cover" src="@/assets/images/Seection.png" />
  </div>
  <div class="block w-[350px] h-[182px] md:hidden">
    <img class="w-[350px] h-[182px]" fit="cover" src="@/assets/images/Logos.png" />
  </div>
  <!-- 文字 -->
  <div class="md:mt-20 md:text-[48px] text-white font-medium text-center md:w-[697px] h-[112px] md:m-auto">
    What are the different types of insurance?
  </div>
  <div
    class="grid grid-rows-4 gap-y-6 w-[350px] h-full md:mt-[56px] md:h-[268px] md:w-[1200px] md:grid md:grid-cols-4 md:gap-6">
    <template v-for="(item, index) in containerList" :key="index">
      <div :data="index" class="w-[350px] min-h-[216px] md:w-[282px] md:h-[268px] bg-white rounded-[24px] shadow-default">
        <img class="w-[56px] h-[56px] mt-3 md:w-[72px] md:h-[72px] md:mt-6 ml-6" fit="cover" :src="item.icon" />
        <div class="mt-3 md:mt-6 md:mt-8 ml-6 text-[24px] font-medium text-dark">
          {{ item.title }}
        </div>
        <div class="mt-1 w-[302px] md:mt-3 ml-6 text-[16px] font-normal text-dark md:w-[234px]">
          {{ item.desc }}
        </div>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import icon from '@/assets/images/icon.png'
import icon1 from '@/assets/images/icon-1.png'
import icon2 from '@/assets/images/icon-2.png'
import icon3 from '@/assets/images/icon-3.png'
const containerList = [
  {
    icon: icon,
    title: 'Car insurance',
    desc: 'This type of insurance protects you financially in the event of an accident.',
  },
  {
    icon: icon1,
    title: 'Life insurance',
    desc: 'This type of insurance provides financial support to your loved ones if you die.',
  },
  {
    icon: icon2,
    title: 'Business insurance',
    desc: 'This type of insurance protects your business from financial losses due to things ',
  },
  {
    icon: icon3,
    title: 'Health insurance',
    desc: 'This type of insurance helps pay for your medical expenses if you get sick or injured.',
  },
]
</script>
<style scoped></style>