<template>
  <div
    class="text-[24px] w-[286px] mb-8 md:mb-0  md:text-[48px] font-medium text-dark text-center md:mt-20 md:w-[467px] m-auto md:leading-[50px] ">
    What our
    customers
    say about us.
  </div>
  <a-carousel indicator-type="dot" auto-play indicator-position="outer" show-arrow="never" :style="{
    width: 'md:w-[1200px] w-[390px] m-auto',
    height: '400px',
  }">
    <a-carousel-item v-for="(item, index) in 3">
      <div :data="item + index" class="mt-[56px] grid grid-cols-1  md:grid-rows-1 md:gap-y-4 md:grid-cols-3 ">
        <template v-for="(item, index) in cardList" :key="index">
          <div :data="index"
            class="w-[350px] m-auto ml-3 md:ml-0 h-[352px] md:w-[391px] md:h-[332px] bg-white rounded-[20px] opacity-100">
            <div class="md:p-5 p-4">
              <icon-quote :style="{ fontSize: '32px', color: '#e5e5e5ff' }" />
              <p class="text-[18px] font-medium mt-3">{{ item.title }}</p>
              <p class="text-[16px] font-normal mt-3">{{ item.desc }}</p>
              <div
                class=" mt-5 flex items-center justify-center w-[61px] h-[32px] rounded-[16px] border border-bgColorLight">
                <icon-star-fill :style="{ fontSize: '16px', color: '#6adab3ff' }" />
                <span class="text-[16px] font-medium ml-1">{{ item.score }}</span>
              </div>
              <div class="mt-3 flex">
                <a-avatar :size="48"
                  imageUrl="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" />
                <div class="ml-3 mb-5">
                  <p class="text-[18px] font-medium text-dark">{{ item.author }}</p>
                  <span class="text-[16px] font-normal text-grey">{{ item.job }}</span>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </a-carousel-item>
  </a-carousel>
</template>

<script setup lang="ts">
import icon from '@/assets/images/icon.png'
import { IconQuote, IconStarFill } from '@arco-design/web-vue/es/icon'
const cardList = [
  {
    title: 'I was so grateful to have insurance when my car was totaled in an accident.',
    desc: 'Insurance is a type of contract that provides financial protection against certain risks or losses.',
    avator: icon,
    score: 5,
    author: 'Wilson Septimus',
    job: 'Behance'
  },
  {
    title: 'I was so grateful to have insurance when my car was totaled in an accident.',
    desc: 'Insurance is a type of contract that provides financial protection against certain risks or losses.',
    avator: icon,
    score: 5,
    author: 'Wilson Septimus',
    job: 'Behance'
  },
  {
    title: 'I was so grateful to have insurance when my car was totaled in an accident.',
    desc: 'Insurance is a type of contract that provides financial protection against certain risks or losses.',
    avator: icon,
    score: 5,
    author: 'Wilson Septimus',
    job: 'Behance'
  }
]

</script>

<style scoped></style>