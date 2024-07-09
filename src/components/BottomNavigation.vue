<template>
  <div class="w-full mb-2">
    <div class="flex-col w-[350px] m-auto md:flex-row md:w-[1200px] md:m-auto md:h-full md:flex md:justify-around">
      <!-- 左边 -->
      <div class="w-[356px] h-[108px]">
        <div class="flex items-center">
          <img class="w-[24px] h-[24px] md:w-[40px] md:h-[40px]" fit="cover" src="../assets/images/logo-img.png" />
          <span class="text-[16px] ml-[6px] md:ml-2 md:text-xl font-medium text-primary">Insurance</span>
        </div>
        <div class="mt-4 text-[16px] md:text-[18px] font-normal text-secondaryDark text-left">
          We work with you to customize a policy that fits your budget and your needs.
        </div>
      </div>

      <!-- 右边 -->
      <div class="flex flex-col mt-8 md:w-[764px] md:h-[216px] md:ml-20 md:flex md:flex-row md:mt-0">
        <!-- 中间 -->
        <div class="flex-1 flex">
          <div class="w-[85px] h-full mr-[56px]">
            <ul class="text-grey text-[14px] md:text-[16px] font-medium">
              <template v-for="(item, index) in navList" :key="index">
                <li :data="index" :class="index != 0 ? 'text-dark cursor-pointer text-[16px]' : ''" class="mb-6">
                  {{ item.title }}
                </li>
              </template>
            </ul>
          </div>
          <div class="w-[155px] h-full">
            <ul class="text-grey text-[14px] md:text-[16px] font-medium">
              <template v-for="(item, index) in linkList" :key="index">
                <li :data="index" :class="index != 0 ? 'text-dark cursor-pointer text-[16px]' : ''" class="mb-6">
                  {{ item.title }}
                </li>
              </template>
            </ul>
          </div>
        </div>
        <!-- 右边 -->
        <div class="mb-[48px] w-[422px] md:h-[216px] md:mb-0 mt-8 md:mt-0">
          <span class="text-dark text-[16px] font-medium">Newsletter</span>
          <div class="mt-[14px] flex">
            <input class="w-[254px] h-[46px] md:w-[326px] md:h-[46px]" type="text"
              placeholder="Enter your email address" />
            <button class="w-[80px] ml-4 h-[46px] bg-primary rounded-[20px] text-dark text-[14px] font-medium">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div
      class="flex flex-col items-center justify-center md:w-[1200px] md:h-[72px] md:m-auto md:mt-[48px] md:bg-bgColorGrey md:rounded-[48px] md:flex md:items-center md:justify-between md:flex-row">
      <div class="text-[12px] ml-5 md:text-[16px] font-normal text-grey">© 2022 Company Name® Global Inc.</div>
      <div class="mt-6 md:mt-0 flex w-[260px] justify-evenly cursor-pointer">
        <div
          class="w-[40px] h-[40px] rounded-[20px] border border-bgColorLight flex items-center justify-center opacity-100">
          <icon-facebook :style="{ fontSize: '16px', color: 'text-dark' }" />
        </div>
        <div
          class="w-[40px] h-[40px] rounded-[20px] border border-bgColorLight flex items-center justify-center opacity-100">
          <icon-twitter :style="{ fontSize: '16px', color: 'text-dark' }" />

        </div>
        <div
          class="w-[40px] h-[40px] rounded-[20px] border border-bgColorLight flex items-center justify-center opacity-100">
          <icon-github :style="{ fontSize: '16px', color: 'text-dark' }" />

        </div>
        <div
          class="w-[40px] h-[40px] rounded-[20px] border border-bgColorLight flex items-center justify-center opacity-100">
          <icon-google :style="{ fontSize: '16px', color: 'text-dark' }" />
        </div>
        <div
          class="w-[40px] h-[40px] rounded-[20px] border border-bgColorLight flex items-center justify-center opacity-100">
          <icon-qq-zone :style="{ fontSize: '16px', color: 'text-dark' }" />
        </div>
      </div>
      <div class="mt-6 md:mt-0 h-[24px] flex mr-[22px] ">
        <span class="text-secondaryDark text-[16px] font-medium mr-11">Terms of Service</span>
        <span class="text-secondaryDark text-[16px] font-medium">Privacy Policy</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { IconFacebook, IconTwitter, IconGithub, IconGoogle, IconQqZone } from '@arco-design/web-vue/es/icon'
const navList = [
  {
    title: 'Navigate',
    icon: 'el-icon-menu',
    path: '/',
  },
  {
    title: 'Services',
    icon: 'el-icon-menu',
    path: '/',
  },
  {
    title: 'About  Us',
    icon: 'el-icon-menu',
  },
  {
    title: 'Contact Us',
    icon: 'el-icon-menu',
  },
  {
    title: 'Careers',
    icon: 'el-icon-menu',
  },
]
const linkList = [
  {
    title: 'Link',
    icon: 'el-icon-menu',
    path: '/',
  },
  {
    title: 'Privacy Policy',
    icon: 'el-icon-menu',
    path: '/',
  },
  {
    title: 'Term & Conditioner',
    icon: 'el-icon-menu',
  },
  {
    title: 'FAQs',
    icon: 'el-icon-menu',
  },
]
</script>

<style scoped>
/* input 取消默认样式 */
input {
  background: none;
  outline: none;
  border: 0px;
  border-bottom: 1px solid #000;
}
</style>
