<template>
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
      <div class="w-[350px] h-[390px] md:w-[560px] md:h-[606px] md:mr-[90px] order-2 md:order-1">
        <div class="text-[24px] md:text-[42px] font-medium text-dark md:leading-[50px]">
          We’re committed to keeping your information secure.
        </div>
        <div class="text-[16px] mt-5 md:text-[18px] font-normal text-dark]">
          With a 10-point security protocol and data encryption in place, we continuously work to protect your account
          with the highest standards available.
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
        <img class="w-[350px] h-[350px] md:w-[550px] md:h-[550px]" fit="cover" src="@/assets/images/content-2.png" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped></style>
