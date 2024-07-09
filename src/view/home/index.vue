<template>
  <div class="min-h-screen bg-bgColorDark flex flex-col ">
    <div class="w-[350px] m-auto flex-col md:w-[1200px] md:m-auto">
      <div class="mt-[57px] md:mt-20 md:flex md:flex-row">
        <div class="w-[350px] h-[238px] md:w-[593px] md:h-[358px]">
          <span
            class="text-[32px] leading-[40px] md:text-[63px] font-medium text-white whitespace-normal break-words md:leading-[70px]">
            Let us help you protect your assets
          </span>
          <div class="text-[16px] w-[350px] mt-2  md:mt-6 md:text-[18px] font-normal text-white md:w-[480px] text-left">
            We work with you to customize a policy that fits your budget and your needs. And we're always available to
            help
            if you have a claim.
          </div>
          <button
            class="mt-[32px] w-[142px] h-[46px] text-[14px] rounded-[20px] bg-secondary  md:w-[153px] md:h-[56px] md:bg-primary flex items-center justify-center md:mt-[56px] md:rounded-[24px] md:text-[16px]">Get
            Started</button>
        </div>
        <div class="w-[331px] w-[302px] md:w-[636px] md:h-[636px] flex items-center justify-center">
          <img class="w-[331px] w-[302px] md:w-[636px] md:h-[636px]" fit="cover" src="@/assets/images/home-bg.png" />
        </div>
      </div>
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
        class="grid grid-rows-4 gap-y-6 w-[350px] h-full  md:mt-[56px] md:h-[268px] md:w-[1200px] md:grid md:grid-cols-4 md:gap-6 ">
        <template v-for="(item, index) in containerList" :key="index">
          <div :data="index"
            class="w-[350px] min-h-[216px] md:w-[282px] md:h-[268px] bg-white rounded-[24px] shadow-default">
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


    </div>
    <!-- 白色背景  -->
    <div class="bg-white w-full h-[900px] mt-20 flex flex-col">
      <div class="w-[350px] md:w-[1200px] h-full m-auto">
        <div class="md:mt-[120px] w-full flex md:justify-between md:flex-row flex-col ">
          <div>
            <img class="hidden md:block w-[550px] h-[476px]" fit="cover" src="@/assets/images/home-bg-1.png" />
            <img class="block  md:hidden  w-[350px] h-[350px]" fit="cover" src="@/assets/images/illustration-h5.png" />
          </div>
          <div>
            <img class="hidden md:block w-[560px] h-[476px]" fit="cover" src="@/assets/images/content-1.png" />
            <img class="block md:hidden w-[350px] h-[462px]" fit="cover" src="@/assets/images/content-h5.png" />
          </div>
        </div>
      </div>
    </div>
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
    desc: 'This type of insurance protects you financially in the event of an accident.'
  },
  {
    icon: icon1,
    title: 'Life insurance',
    desc: 'This type of insurance provides financial support to your loved ones if you die.'
  },
  {
    icon: icon2,
    title: 'Business insurance',
    desc: 'This type of insurance protects your business from financial losses due to things '
  },
  {
    icon: icon3,
    title: 'Health insurance',
    desc: 'This type of insurance helps pay for your medical expenses if you get sick or injured.'
  }
]

</script>

<style scoped></style>