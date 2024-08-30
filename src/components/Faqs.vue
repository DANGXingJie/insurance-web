<template>
  <div class="mt-10 w-[390px] md:mt-20 md:w-[1200px] md:min-h-[800px]">
    <span v-if="props.type === 1" class="text-base ml-5 md:text-5xl font-medium text-dark mt-20 inline-block">FAQs</span>
    <template v-for="(item, index) in faqList" :key="index">
      <div
        class="mt-8 w-[350px] min-h-[76px] m-auto rounded-[12px] md:mt-4 md:w-[1200px] md:min-h-[96px] bg-white md:rounded-[20px]">
        <div class="p-3 md:pt-8 md:pl-6 md:pb-6">
          <div class="w-full flex justify-between items-center">
            <span class="text-base md:text-2xl font-medium">{{ item.title }}</span>
            <icon-plus v-if="!item.open" @click="handleIsOpen(index)" class="mr-6 text-base md:text-2xl"
              :style="{ color: '#e5e5e5ff' }" />
            <icon-minus v-else @click="handleIsOpen(index)" class="mr-6 text-base md:text-2xl"
              :style="{ color: '#e5e5e5ff' }" />
          </div>
          <p v-if="item.open" class="pt-3 text-base md:mt-4 md:mr-6 md:text-[18px] font-normal">{{ item.desc }}</p>
        </div>
      </div>
    </template>
    <div v-if="props.type === 1" class="mt-[32px] w-[390px] md:mt-[56px] md:w-[1200px] m-auto flex justify-center">
      <button @click="handleMore"
        class="w-[158px] md:w-[154px] h-[46px] rounded-[20px] border border-secondary text-secondary text-sm font-medium">
        Discover More
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { IconPlus, IconMinus } from '@arco-design/web-vue/es/icon'
const props = defineProps({
  type: {
    type: Number,
    default: 1//1首页2单独FAQs
  }
})

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
  },
  {
    title: 'What are the different types of insurance?',
    desc: 'There are many different types of insurance, but some of the most common include:Homeowners insurance: This type of insurance protects your home and belongings from damage caused by fire, theft, and other disasters.Car insurance: This type of insurance protects you financially in the event of an accident.Life insurance: This type of insurance provides financial support to your loved ones if you die.Health insurance:This type of insurance helps pay for your medical expenses if you get sick or injured',
    open: false,
  },
])
const handleIsOpen = (index: number) => {
  faqList[index].open = !faqList[index].open
}
const handleMore = () => {
  console.log('more')
}
</script>
<style scoped></style>
