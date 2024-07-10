<template>
  <div class="bg-bgColorDark flex flex-col">
    <div class="w-[350px] m-auto flex flex-col md:w-[1200px] md:m-auto">
      <SidedLayout />
      <InsuranceType />
    </div>
    <!-- 白色背景  -->
    <div class="bg-white w-full mt-20 flex flex-col">
      <div class="w-[350px] md:w-[1200px] m-auto h-full">
        <Information />
        <LatestArtcile />
        <SidedLayout :title="layoutInfo.title" :desc="layoutInfo.desc" :bgImg="layoutInfo.bgImg"
          :type="layoutInfo.type" />
      </div>
    </div>
    <div class="block md:hidden bg-white h-[40px]"></div>
    <!-- 灰色背景 -->
    <div class="bg-lightgray md:pt-0 w-full min-h-[800px] flex flex-col">
      <div class="w-[390px] mt-10 md:w-[1200px] m-auto md:mt-10">
        <Customers />
        <!-- faqs -->
        <Faqs />
      </div>
      <!-- footer背景 -->
      <div class="w-[350px] md:w-[1408px] md:h-[500px] m-auto md:mt-20 mt-12">
        <img class=" hidden md:block w-[1408px] h-full pb-20" fit="cover" src="@/assets/images/footer.png" />
        <img class="block md:hidden w-[350px] h-full pb-10" fit="cover" src="@/assets/images/footer-h5.png" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import InsuranceType from './components/InsuranceType.vue'
import Information from './components/Information.vue'
import LatestArtcile from './components/LatestArtcile.vue'
import Customers from './components/Customers.vue'
import Faqs from './components/Faqs.vue'
import SidedLayoutimg from '@/assets/images/layout-img.png'
const layoutInfo = {
  title: 'How do I file a claim?',
  desc: 'If you have a covered loss, you will need to file a claim with your insurance company. The process for filing a claim will vary depending on the type of insurance you have.However, typically you will need to provide the insurance company with information about the loss, such as the date of the loss, the amount of your losses, and any supporting documentation.',
  bgImg: SidedLayoutimg,
  type: 2,
}
</script>

<style scoped></style>
