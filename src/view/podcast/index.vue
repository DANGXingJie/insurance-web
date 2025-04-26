<template>
  <div class="md:w-full bg-syGreyBg overflow-hidden">
    <div class="md:w-[1200px] w-[350px] m-auto md:mt-20 h-full mt-10">
      <div class="pt-6 flex w-full items-center">
        <img class="w-6 h-4 mr-2" src="@/assets/images/update-icon.png" alt=" 图标" />
        <span class="md:text-xl text-base font-bold">最近更新</span>
      </div>
      <div
        class="md:mt-4 mt-6 grid md:grid-cols-4 md:grid-rows-2 gap-x-1 grid-cols-2 grid-rows-4 md:gap-y-2 gap-y-4 w-full h-[230px]">
        <div class="md:w-[280px] md:h-[90px] w-[181px] h-[46px] flex" v-for="(item, index) in 8" :key="index">
          <img fit="cover" class="md:w-9 md:h-8 mr-2 h-[22px] w-[22px]" src="@/assets/images/boke.png" alt=" 图标" />
          <div class="md:w-[199px] w-[138px] h-full">
            <div class="md:text-lg text-xs tracking-widest overflow-hidden line-clamp-2 text-left md:mb-2">
              【聊科技】机器人跑马拉松，意义何在？
            </div>
            <span class="text-xs text-gray-400">更新/播客</span>
          </div>
        </div>
      </div>
      <!-- 瀑布流 -->
      <div class="md:columns-4 columns-2 md:gap-8 gap-4 space-y-8 mt-20">
        <template v-for="(item, index) in items" :key="index">
          <!-- 每个项目 -->
          <div class="break-inside-avoid hover:cursor-pointer" :data-key="index">
            <div class="bg-white rounded-l shadow-md">
              <div class="md:w-[278px] w-[166px] pt-4 md:pl-5 pl-2 md:pr-4 pr-2"
                :style="{ height: `${item.height}px` }">
                <div class="relative md:h-[238px] h-[141px]">
                  <img class="md:w-[238px] md:h-[238px] w-[164px] h-[141px] text-center" :src="item.img" alt=" 图标"
                    fit="cover" />
                  <div class="absolute bottom-0 left-0 right-0 text-white flex">
                    <div v-if="item.type === 2"
                      class="w-[48px] h-[28px] text-xs flex items-center justify-center bg-gray-600 text-white">
                      课程
                    </div>
                    <template v-else>
                      <div class="w-[68px] h-[28px] text-xs bg-gray-400 flex justify-center items-center">精选电台</div>
                      <div @click="handlePlayAudio(item)"
                        class="w-[54px] h-[28px] text-xs flex items-center bg-black text-white">
                        <icon-play-arrow-fill size="20" />音频
                      </div>
                    </template>
                  </div>
                </div>
                <!-- 文字 -->
                <div class="md:text-lg text-xs mt-4 mb-2">{{ item.title }}</div>
                <div class="text-xs text-gray-400">
                  {{ item.desc }}
                </div>
                <div class="flex items-center justify-between mt-4">
                  <div class="flex text-xs items-center text-gray-400">
                    作者 ·<span class="ml-2">{{ item.auther }}</span>
                  </div>
                  <div class="text-xs text-gray-400 flex justify-center items-center">
                    <icon-fire class="text-red-500" size="14" /><span class="ml-1">73.2万</span>
                  </div>
                </div>
                <div v-if="item.type === 2"
                  class="flex justify-center items-center md:text-sm text-xs mt-8 bg-syGreyBg text-gray-400 md:w-[238px] md:h-[34px] w-[150px] h-[22px]">
                  {{ item.course }} <icon-right size="16" class="ml-1" />
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
  <MusicPlayer ref="musicPlayerRef" :playlist="playlist" :is-mobile="isMobile" />
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import MusicPlayer from '@/components/MusicPlayer.vue'
import listImg from '@/assets/images/pubo.png'
import song1 from '@/assets/周杰伦-不能说的秘密.mp3'
import song2 from '@/assets/周杰伦-退后.mp3'
import song3 from '@/assets/周杰伦-最长的电影.mp3'
//import router from '@/router'
const musicPlayerRef = ref<InstanceType<typeof MusicPlayer> | null>(null)
//播客/课程数据
const items = ref([
  {
    id: 1,
    title: '史蒂夫说424期 - 凉意 - 世界一流的亲密关系是什么样的？',
    desc: '史蒂夫说',
    type: 1,
    auther: '史蒂夫',
    img: listImg,
    height: 443,
  },
  {
    id: 2,
    type: 1,
    title: 'No.31 对话瑞哥：我带“甲亢哥”逛重庆',
    desc: '我有一个朋友|董晨宇·',
    auther: '董晨宇',
    img: listImg,
    height: 443,
  },
  {
    id: 3,
    type: 2,
    title: '101.【聊科技】机器人跑马拉松，意义何在？',
    desc: '请思考人形机器人在半马比赛中，可能出现哪些问题？为什么说这场半马比赛是一个难得的试验场？机器人跑马拉',
    img: listImg,
    course: '给孩子的365天新闻课',
    auther: '馒头星球',
    height: 520,
  },
  {
    id: 4,
    title: '【导读】苗德岁：生命演化的历史与奥妙',
    desc: '大家好，我是苗德岁。很高兴担任这门《给孩子的365天文化课》的“生命简史”导师。欢迎大家选听这门课！',
    type: 2,
    auther: '苗德岁',
    course: '给孩子的365天文化课',
    img: listImg,
    height: 520,
  },
  {
    id: 5,
    type: 1,
    title: '133.中产返贫：情绪、数据与事实｜青沙龙',
    desc: '问题青年',
    auther: '问题青年',
    img: listImg,
    height: 443,
  },
  {
    id: 6,
    type: 1,
    title: '图拉斯｜腾讯出手投资育碧，市值腰斩的法国游戏巨头有何吸引力？',
    desc: '声动早咖啡',
    auther: '声动早咖啡',
    img: listImg,
    height: 500,
  },
  {
    id: 7,
    title: '钱不是被大风刮来的，但是被大风刮走的！',
    desc: '逃班威龙',
    auther: '逃班威龙',
    type: 1,
    img: listImg,
    height: 443,
  },
  {
    id: 8,
    title: 'vol.700 钢门组合大战西城男孩',
    desc: '日谈公园',
    auther: '日谈公园',
    type: 1,
    img: listImg,
    height: 500,
  },
])

// 播放列表数据
const playlist = reactive([
  {
    title: '周杰伦-不能说的秘密',
    artist: '艺术家1',
    src: song1,
  },
  {
    title: '周杰伦-退后',
    artist: '艺术家1',
    src: song2,
  },
  {
    title: '周杰伦-最长的电影',
    artist: '艺术家1',
    src: song3,
  },
])
const handlePlayAudio = (item: any) => {
  // 直接调用子组件暴露的方法
  console.log('%c [  ]-179', 'font-size:13px; background:pink; color:#bf2c9f;', item)
  if (musicPlayerRef.value) {
    musicPlayerRef.value.playAudio(item)
  } else {
    console.error('MusicPlayer 组件未加载')
  }
}

const isMobile = ref(false)
//初始化瀑布流高度
const initHeight = () => {
  //判断是否是移动端
  isMobile.value = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  if (isMobile.value) {
    //如果是切换到了移动端，则修改items 数组每一项的高度
    console.log('%c [ 移动端 ]-449', 'font-size:13px; background:pink; color:#bf2c9f;')
    items.value.forEach((item) => {
      //如果item.type 为 1，则修改高度为 50px,否则为 100px
      if (item.type === 1) {
        item.height = 300
      } else {
        item.height = 388
      }
    })
  }
}
initHeight()
</script>
<style scoped></style>
