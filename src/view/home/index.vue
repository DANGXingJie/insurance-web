<template>
  <div class="bg-bgColorDark flex flex-col">
    <div class="w-[350px] m-auto flex flex-col md:w-[1200px] md:m-auto">
      <SidedLayout />
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
    <div class="bg-white w-full mt-20 flex flex-col">
      <div class="w-[350px] md:w-[1200px] m-auto h-full">
        <div class="md:mt-[120px] w-full flex md:justify-between md:flex-row flex-col">
          <div>
            <img class="hidden md:block w-[550px] h-[476px]" fit="cover" src="@/assets/images/home-bg-1.png" />
            <img class="block md:hidden w-[350px] h-[350px]" fit="cover" src="@/assets/images/illustration-h5.png" />
          </div>
          <div>
            <img class="hidden md:block w-[560px] h-[476px]" fit="cover" src="@/assets/images/content-1.png" />
            <img class="block md:hidden w-[350px] h-[462px]" fit="cover" src="@/assets/images/content-h5.png" />
          </div>
        </div>
        <div class="w-[350px] mt-10 md:mt-[96px] md:w-full">
          <div class="flex flex-col md:flex-row">
            <div class="w-[350px] h-[172px] md:w-[560px] md: h-[606px] md:mr-[90px] order-2 md:order-1">
              <div class="text-[24px] md:text-[42px] font-medium text-dark md:leading-[50px]">
                We’re committed to keeping your information secure.
              </div>
              <div class="text-[16px] mt-5 md:text-[18px] font-normal text-dark]">
                With a 10-point security protocol and data encryption in place, we continuously work to protect your
                account with the highest standards available.
              </div>
              <div class="mt-8">
                <a-collapse :default-active-key="['0', 0]" :expand-icon-position="'right'">
                  <template v-for="(item, index) in 3" :key="index">
                    <a-collapse-item :data="index" header="SSL Encryption">
                      <div class="text-[16px] text-dark">
                        Our website and app are both secured with 256-bit {{ item }}encryption.
                      </div>
                    </a-collapse-item>
                  </template>
                </a-collapse>
              </div>
            </div>
            <div class="w-[350px] h-[350px] md:w-[550px] md:h-[550px] order-1 md:order-2">
              <img class="w-[350px] h-[350px] md:w-[550px] md:h-[550px]" fit="cover"
                src="@/assets/images/content-2.png" />
            </div>
          </div>
        </div>

        <div class="mt-1 md:mt-20 w-full min-h-[729px]">
          <div class="text-[24px] md:text-[48px] font-medium text-dark">Latest artcile</div>
          <button
            class="mt-8 w-[158px] h-[46px] md:mt-5 md:w-[154px] md:h-[46px] rounded-[20px] border border-primary text-[14px] text-primary">
            Latest artcile
          </button>
          <div class="mt-10 md:mt-[56px]">
            <div class="md:p-2 grid grid-rows-1 gap-y-4 md:grid-cols-3 md:gap-x-6">
              <template v-for="(item, index) in sessionList" :key="index">
                <div :data="index" class="w-[350px] min-h-[363px] md:w-[384px] md:min-h-[391px]">
                  <img class="w-[326px] h-[227px] text-center md:w-[360px] md:h-[251px] mr-3 ml-3 rounded-[16px]"
                    fit="cover" :src="item.icon" />
                  <div class="mt-4 text-[18px] md:text-[20px] font-medium text-dark ml-3">{{ item.title }}</div>
                  <div class="mt-4 text-[14px] md:text-[16px] font-normal text-secondaryDark text-left ml-3">
                    <span class="mr-1 text-left">{{ item.date }}.</span>
                    <span>{{ item.author }}</span>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
        <SidedLayout :title="layoutInfo.title" :desc="layoutInfo.desc" :bgImg="layoutInfo.bgImg"
          :type="layoutInfo.type" />
      </div>
    </div>
    <!-- 灰色背景 -->
    <div class="bg-lightgray w-full min-h-[800px] flex flex-col">
      <div class="w-[390px] md:w-[1200px] m-auto md:mt-10">
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
                      <a-avatar size="48px"
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

        <!-- faqs -->
        <div class="mt-20 w-full min-h-[800px]">
          <span class="text-5xl font-medium text-dark mt-20 inline-block">FAQs</span>
          <template v-for="(item, index) in faqList" :key="index">
            <div class="mt-[56px] w-[1200px] min-h-[96px] bg-white rounded-[20px]">
              <div class="pt-8 pl-6 pb-6">
                <div class="w-full flex justify-between items-center">
                  <span class="text-2xl font-medium">{{ item.title }}</span>
                  <icon-plus v-if="!item.open" @click="handleIsOpen(index)" class="mr-6"
                    :style="{ fontSize: '32px', color: '#e5e5e5ff' }" />
                  <icon-minus v-else @click="handleIsOpen(index)" class="mr-6"
                    :style="{ fontSize: '32px', color: '#e5e5e5ff' }" />
                </div>
                <p v-if="item.open" class="mt-4 mr-6 text-[18px] font-normal">{{ item.desc }}</p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { IconQuote, IconStarFill, IconPlus, IconMinus } from '@arco-design/web-vue/es/icon'
import SidedLayoutimg from '@/assets/images/layout-img.png'
import { reactive } from 'vue'
import icon from '@/assets/images/icon.png'
import icon1 from '@/assets/images/icon-1.png'
import icon2 from '@/assets/images/icon-2.png'
import icon3 from '@/assets/images/icon-3.png'
import list1 from '@/assets/images/list-1.png'
import list2 from '@/assets/images/list-2.png'
import list3 from '@/assets/images/list-3.png'
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
const sessionList = [
  {
    icon: list1,
    title: 'The rise of the gig economy and its impact on insurance',
    date: 'Sep 31 , 2023',
    author: 'Wilson Septimus',
  },
  {
    icon: list2,
    title: 'The changing demographics of the population and its impact on insurance',
    date: 'Sep 31 , 2023',
    author: 'Wilson Septimus',
  },
  {
    icon: list3,
    title: 'The increasing cost of healthcare and its impact on insurance',
    date: 'Sep 31 , 2023',
    author: 'Tiana Westervelt',
  },
]

const layoutInfo = {
  title: 'How do I file a claim?',
  desc: 'If you have a covered loss, you will need to file a claim with your insurance company. The process for filing a claim will vary depending on the type of insurance you have.However, typically you will need to provide the insurance company with information about the loss, such as the date of the loss, the amount of your losses, and any supporting documentation.',
  bgImg: SidedLayoutimg,
  type: 2,
}

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
const faqList = reactive([
  {
    title: 'What are the different types of insurance?',
    desc: 'There are many different types of insurance, but some of the most common include:Homeowners insurance: This type of insurance protects your home and belongings from damage caused by fire, theft, and other disasters.Car insurance: This type of insurance protects you financially in the event of an accident.Life insurance: This type of insurance provides financial support to your loved ones if you die.Health insurance:This type of insurance helps pay for your medical expenses if you get sick or injured',
    open: false,
  },
  {
    title: 'What are the different types of insurance?',
    desc: 'There are many different types of insurance, but some of the most common include:Homeowners insurance: This type of insurance protects your home and belongings from damage caused by fire, theft, and other disasters.Car insurance: This type of insurance protects you financially in the event of an accident.Life insurance: This type of insurance provides financial support to your loved ones if you die.Health insurance:This type of insurance helps pay for your medical expenses if you get sick or injured',
    open: false,
  },
  {
    title: 'What are the different types of insurance?',
    desc: 'There are many different types of insurance, but some of the most common include:Homeowners insurance: This type of insurance protects your home and belongings from damage caused by fire, theft, and other disasters.Car insurance: This type of insurance protects you financially in the event of an accident.Life insurance: This type of insurance provides financial support to your loved ones if you die.Health insurance:This type of insurance helps pay for your medical expenses if you get sick or injured',
    open: false,
  }
])
const handleIsOpen = (index: number) => {
  faqList[index].open = !faqList[index].open
}
</script>

<style scoped></style>
