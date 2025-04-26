<template>
  <div class="mt-10 md:mt-20 w-full min-h-[729px]">
    <div class="text-[24px] md:text-[48px] font-medium text-dark">Latest artcile</div>
    <button @click="handlArtcile"
      class="mt-8 w-[158px] h-[46px] md:mt-5 md:w-[154px] md:h-[46px] rounded-[20px] border border-primary text-[14px] text-primary">
      Latest artcile
    </button>
    <div class="mt-10 md:mt-[56px]">
      <div class="md:p-2 grid grid-rows-1 gap-y-4 md:grid-cols-3 md:gap-x-6">
        <template v-for="(item, index) in sessionList" :key="index">
          <div :data="index" class="w-[350px] min-h-[363px] md:w-[384px] md:min-h-[391px]">
            <img class="w-[326px] h-[227px] text-center md:w-[360px] md:h-[251px] mr-3 ml-3 rounded-[16px]" fit="cover"
              :src="item.icon" />
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
</template>

<script setup lang="ts">
import list1 from '@/assets/images/list-1.png'
import list2 from '@/assets/images/list-2.png'
import list3 from '@/assets/images/list-3.png'
import { useRouter } from "vue-router"
const router = useRouter()
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

const handlArtcile = () => {
  router.push({
    path: '/layout/latestArticle',

  })
}
</script>

<style scoped></style>
