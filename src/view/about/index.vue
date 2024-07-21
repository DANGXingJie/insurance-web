<template>
  <div class="w-[350px] mt-6 md:w-[1200px] m-auto md:mt-[66px]">
    <button
      class="w-[109px] h-[38px] md:w-[131px] md:h-[50px] border border-solid border-2 bg-bgColorGrey border-bgColorGrey rounded-[24px] text-secondary">
      ABOUT US
    </button>
    <div class="text-3xl mt-4 md:mt-5 md:text-5xl font-medium md:w-[758px] md:h-[160px] w-[350px] h-[160px]">
      We are a leading provider of insurance solutions for individuals and businesses
    </div>
    <SidedLayout :title="layoutInfo.title" :desc="layoutInfo.desc" :bgImg="layoutInfo.bgImg" :type="layoutInfo.type"
      :btnText="layoutInfo.btnText" />
    <div class="md:mt-20 mt-10">
      <div class="w-[350px] h-[140px] md:w-[741px] md:h-[124px] text-center m-auto">
        <p class="text-2xl mb-4 md:mb-4 md:text-[48px] text-dark font-medium">Our Team</p>
        <span class="text-base md:text-[18px] font-medium">We are a team of experienced and dedicated
          insurance
          professionals who are
          committed to helping our clients
          protect their assets and their future.</span>
      </div>
    </div>
    <div
      class="w-[350px] h-full mt-8 md:h-[890px] md:w-full md:mt-[56px] grid grid-cols-2 grid-rows-2 gap-y-10 gap-x-6 md:gap-x-6 md:grid md:grid-row-2 md:grid-cols-4">
      <template v-for="(item, index) in 8" :key="index">
        <div :data="index"
          class="h-[280px] w-[160px] md:w-[282px] md:h-[392px] flex justify-center flex-col items-center">
          <img class="w-[160px] h-[160px]  md:w-[196px] md:h-[196px]" fit="cover" src="@/assets/images/avator.png" />
          <div class="w-[160px] h-[108px] mt-3 md:w-[180px] md:h-[114px] md:mt-[20px] text-center">
            <p class="text-[18px] md:text-[20px] font-medium">Nolan Korsgaard{{ item }}</p>
            <p class="text-[12px] md:text-sm mt-1 font-normal">Founder & Owners</p>
          </div>
          <div class="flex w-[140px] justify-around">
            <div class="w-10 h-10 rounded-[20px] border border-solid border-gray-200 flex justify-center items-center">
              <icon-facebook size="14px" />
            </div>
            <div class="w-10 h-10 rounded-[20px] border border-solid border-gray-200 flex justify-center items-center">
              <icon-facebook size="14px" />
            </div>
            <div class="w-10 h-10 rounded-[20px] border border-solid border-gray-200 flex justify-center items-center">
              <icon-facebook size="14px" />
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import SidedLayoutimg from '@/assets/images/home-bg.png'
const layoutInfo = {
  title: 'Our Mission',
  desc: 'Our mission is to provide our clients with the peace of mind that comes with knowing that they are protected in the event of an unexpected event. We believe that everyone deserves to have access to affordable and comprehensive insurance coverage, and we are committed to helping our clients find the right insurance policies for their needs.',
  bgImg: SidedLayoutimg,
  type: 2,
  btnText: 'Contact Us',
}
</script>

<style scoped></style>
