<template>
  <div class="bg-syGreyBg overflow-hidden">
    <div class="md:w-[1200px] m-auto md:mt-[66px] w-[390px] mt-2">
      <div class="w-[350px] m-auto md:w-[1200px]">
        <div
          class="md:w-[86px] mt-8 md:h-[50px] w-[75px] h-[38px] rounded-3xl border border-gray-200 flex justify-center items-center">
          <span class="text-secondary md:text-[18px] text-[14px] font-normal">FAQs</span>
        </div>
        <div
          class="mt-4 md:w-[629px] md:h-[54px] md:text-5xl font-medium md:whitespace-nowrap w-[350px] h-[80px] text-3xl">
          Frequently Asked Questions
        </div>
        <div class="mt-4 w-full md:text-lg font-normal text-base">
          We understand that you may have some questions about insurance. We have compiled a list of frequently asked
          questions to help you get the information you need. If you have any other questions, please do not hesitate to
          contact us.
        </div>
      </div>
      <Faqs :type="2" />
    </div>
    <!-- footer背景 -->
    <FooterBg />
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { getCardList } from '@/api/test'
const store = useUserStore()
const getInfo = async () => {
  const res = await getCardList()
  console.log(res, store)
}
getInfo()
</script>

<style scoped></style>