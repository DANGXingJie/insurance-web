<template>
  <div class="md:w-[1200px] w-[350px] mt-6 m-auto md:mt-16 flex justify-center items-center flex-col">
    <div
      class="md:w-[86px] md:h-[50px] w-[75px] h-[38px] rounded-3xl border border-gray-200 flex justify-center items-center">
      <span class="text-secondary md:text-[18px] text-[14px] font-normal">BLOG</span>
    </div>
    <div class="md:mt-5 mt-4 font-medium md:text-[56px] text-[32px] h-16 w-[353px] text-center">Latest Article</div>
    <div class="md:mt-5 font-medium md:text-lg text-base h-16 text-center md:w-[698px] text-center w-[350px] leading-6">
      Our blog is
      a resource
      for anyone
      who wants to
      learn
      more about
      insurance,
      from the basics to the most complex topics.</div>
  </div>
  <div class="md:w-[1227px] m-auto md:mt-[120px] md:h-[1330px] mt-20 w-[350px]">
    <div class="md:flex">
      <!-- left -->
      <div class="md:w-[800px] md:min-h-[600px] md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 w-full m-auto">
        <template v-for="(item, index) in 6" :key="index">
          <div :data-key="index" class="md:w-[384px] md:h-[350px] w-[350px] h-[306] rounded-[24px] mb-6">
            <img src="@/assets/images/aricle.png" alt="" class="md:w-[384px] md:h-[240px] h-[216px] w-full">
            <div class="md:mt-6 mt-4">
              <p class="md:text-sm text-xs text-gray-600">22/06/2023</p>
              <div
                class="mt-2 w-[336px] md:h-[56px] h-[52px] text-left font-medium md:text-xl text-lg md:leading-7 leading-4]">
                How do I{{ item }}
                choose
                the right
                insurance for
                me?
              </div>
            </div>
          </div>
        </template>

        <div class="hidden md:flex items-center justify-center w-[800px] m-auto mt-8">
          <a-pagination :total="200" />
        </div>
      </div>
      <!-- right -->
      <div class="md:ml-[60px] md:w-[367px] md:min-h-20 md:mt-0 mt-8">
        <div class="flex">
          <a-input class="md:w-[311px] w-[294px] h-12 rounded-[20px] bg-[#FAFAFA]" placeholder="Please enter something"
            allow-clear>
            <template #prefix>
              <icon-search size="18" />
            </template>
          </a-input>
          <img @click="handleSearch" src="@/assets/images/search-icon.png" alt="" class="w-[48px] h-[48px] ml-1">
        </div>
        <div class="mt-8 md:text-xl text-base font-medium md:mb-6 mb-4">Recent Posts</div>
        <div class="mb-4 mt-2 " v-for="(item, index) in 3" :key="index">
          <p class="md:text-sm text-xs text-gray-600">22/06/2023</p>
          <div
            class="mt-4 w-[336px] md:h-[56px] h-[52px] text-left font-medium md:text-xl text-base md:leading-7 leading-4]"
            :data-key="index">
            How do I{{ item }}
            choose
            the right
            insurance for
            me?
          </div>
          <a-divider />
        </div>
        <div class="mt-8">
          <div class="md:mt-8 md:text-xl text-base font-medium md:mb-6 mb-4">Categories</div>
          <div class="md:mt-6 mt-4">
            <template v-for="(item, index) in 4" :key="index">
              <div :data-key="index"
                class="flex justify-between items-center w-[340px] h-[48px] border-t border-b border-l-0 border-r-0 ">
                <div class="text-base font-medium">
                  Car insurance{{ item }}
                </div>
                <div class="text-base font-medium text-gray-400">(3)</div>
              </div>
            </template>
          </div>
        </div>
        <div class="mt-8">
          <div class="md:mt-8 md:text-xl text-base font-medium md:mb-6 mb-4">Tags</div>
          <div class="mt-6 flex w-[367px] flex-wrap">
            <template v-for="(item, index) in tagsList" :key="index">
              <div :data-key="index"
                class="mr-3 min-w-[90px] md:h-[38px] h-[34px] md:mb-4 mb-3 rounded-[24px] border border-gray-200 flex items-center justify-center">
                <span class="md:text-sm text-xs font-medium text-gray-400 p-2">{{ item.name }}</span>
              </div>
            </template>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';


const handleSearch = () => {
  console.log('click')
}



const tagsList = reactive(
  [
    {
      name: 'Car insurance',
    },
    {
      name: 'Driving laws',
    },
    {
      name: 'Car repairs',
    },
    {
      name: 'Car theft',
    },
    {
      name: 'Driving laws',
    },
    {
      name: 'Home repairs',
    },
    {
      name: 'Car theft',
    },
  ]
)

</script>

<style scoped></style>