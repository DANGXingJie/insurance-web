<template>
  <div class="mt-[57px] md:mt-20 flex md:flex-row flex-col">
    <div class="w-[350px] h-full md:w-[593px] md:h-[358px]"
      :class="props.type === 1 ? 'md:order-1' : 'md:order-2 order-2'">
      <span
        :class="props.type === 1 && props.title === 'Let us help you protect your assets' ? 'text-white' : 'text-dark'"
        class="text-[32px] leading-[40px] md:text-[63px] font-medium whitespace-normal break-words md:leading-[70px]">
        {{ props.title }}
      </span>
      <div :class="props.type === 1 && props.title === 'Let us help you protect your assets' ? 'text-white' : 'text-dark'"
        class="text-[16px] w-[350px] mt-2 md:mt-6 md:text-[18px] font-normal  md:w-[480px] text-left">
        {{ props.desc }}
      </div>
      <button @click="handleGetStarted"
        class="mt-[32px] w-[142px] h-[46px] text-[14px] rounded-[20px] bg-secondary md:w-[153px] md:h-[56px] md:bg-primary flex items-center justify-center md:mt-[56px] md:rounded-[24px] md:text-[16px]">
        Get Started
      </button>
    </div>
    <div :class="props.type === 1 ? 'order-1' : 'md:order-1 order-1 md:top-0 mt-8'"
      class="w-[331px] w-[302px] mt-[56px] md:mt-0  md:w-[636px] md:h-full flex items-center justify-center">
      <img v-if="props.type == 1" class="w-[331px] w-[302px] md:w-[636px] md:h-full" fit="cover" :src="props.bgImg" />
      <img v-else class="w-[331px] w-[302px] md:w-[550px] md:h-[500px]" fit="cover" :src="props.bgImg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import homeBg from '@/assets/images/home-bg.png'
const props = defineProps({
  title: {
    type: String,
    default: 'Let us help you protect your assets'
  },
  desc: {
    type: String,
    default: `We work with you to customize a policy that fits your budget and your needs. And we're always available to help if you have a claim.`
  },
  type: {
    type: Number,
    default: 1//1顶部2中间，1字体是黑色，文字在图片右边
  },
  bgImg: {
    type: String,
    default: homeBg
  }
})
const emit = defineEmits(['getStarted'])
const handleGetStarted = () => {
  console.log('handleGetStarted')
  emit('getStarted')
}
</script>

<style scoped></style>