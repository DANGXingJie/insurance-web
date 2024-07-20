<template>
  <div class="w-[350px] md:w-[1200px] m-auto overflow-hidden">
    <div class="mt-[24px] md:mt-[66px] w-full flex flex-col items-center">
      <button
        class="w-[107px] h-[38px] md:w-[128px] md:h-[50px] rounded-[24px] text-secondary text-base font-medium border border-gray-200 flex items-center justify-center">
        SERVICES
      </button>
      <div class="text-[32px] mt-8  md:mt-5 text-center md:text-[56px] md:w-[764px] font-medium">
        What are the different types of insurance?
        <p class="mt-3 md:mt-5 text-[16px] md:text-[18px] font-normal">
          There are many different types of insurance, each designed to protect you from a different type of risk. Some of
          the most common types of insurance include:
        </p>
      </div>
    </div>
    <div class="pb-20">
      <SidedLayout :title="layoutInfo.title" :desc="layoutInfo.desc" :bgImg="layoutInfo.bgImg" :type="layoutInfo.type" />
      <SidedLayout :title="layoutInfo2.title" :desc="layoutInfo2.desc" :bgImg="layoutInfo2.bgImg"
        :type="layoutInfo2.type" />
      <SidedLayout :title="layoutInfo4.title" :desc="layoutInfo4.desc" :bgImg="layoutInfo4.bgImg"
        :type="layoutInfo4.type" />
      <SidedLayout :title="layoutInfo3.title" :desc="layoutInfo3.desc" :bgImg="layoutInfo3.bgImg"
        :type="layoutInfo3.type" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SidedLayoutimg from '@/assets/images/service-img1.png'
import SidedLayoutimg2 from '@/assets/images/service-img2.png'
import SidedLayoutimg3 from '@/assets/images/service-img3.png'
import SidedLayoutimg4 from '@/assets/images/service-img4.png'
const layoutInfo = {
  title: 'Car insurance',
  desc: 'This type of insurance protects you financially if you are involved in a car accident. It can cover the cost of repairs to your car, medical expenses, and lost wages.',
  bgImg: SidedLayoutimg,
  type: 2,
}
const layoutInfo2 = {
  title: 'Car insurance',
  desc: 'This type of insurance protects you financially if you are involved in a car accident. It can cover the cost of repairs to your car, medical expenses, and lost wages.',
  bgImg: SidedLayoutimg2,
  type: 1,
}
const layoutInfo3 = {
  title: 'Car insurance',
  desc: 'This type of insurance protects you financially if you are involved in a car accident. It can cover the cost of repairs to your car, medical expenses, and lost wages.',
  bgImg: SidedLayoutimg3,
  type: 1,
}
const layoutInfo4 = {
  title: 'Car insurance',
  desc: 'This type of insurance protects you financially if you are involved in a car accident. It can cover the cost of repairs to your car, medical expenses, and lost wages.',
  bgImg: SidedLayoutimg4,
  type: 2,
}

</script>

<style scoped></style>