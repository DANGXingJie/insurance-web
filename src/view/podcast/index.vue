<template>
  <div class="md:w-full bg-syGreyBg overflow-hidden">
    <div class="md:w-[1200px] m-auto md:mt-20 h-[1800px]">
      <div class="pt-6 flex w-full items-center">
        <img class="w-6 h-4 mr-2" src="@/assets/images/update-icon.png" alt=" 图标" />
        <span class="text-xl font-bold">最近更新</span>
      </div>
      <div class="mt-4 grid grid-cols-4 grid-rows-2 gap-x-1 gay-y-2 w-full h-[230px]">
        <div class="w-[280px] h-[90px] flex" v-for="(item, index) in 8" :key="index">
          <img fit="cover" class="w-9 h-8 mr-2" src="@/assets/images/boke.png" alt=" 图标" />
          <div class="w-[199px] h-full">
            <div class="text-lg tracking-widest overflow-hidden line-clamp-2 text-left mb-2">
              【聊科技】机器人跑马拉松，意义何在？
            </div>
            <span class="text-xs text-gray-400">更新/播客</span>
          </div>
        </div>
      </div>
      <!-- 瀑布流 -->
      <div class="columns-4 gap-8 space-y-8 mt-20">
        <template v-for="(item, index) in items" :key="index">
          <!-- 每个项目 -->
          <div class="break-inside-avoid hover:cursor-pointer" :data-key="index">
            <div class="bg-white rounded-l shadow-md">
              <div class="w-[278px] pt-4 pl-5 pr-4" :style="{ height: `${item.height}px` }">
                <div class="relative h-[238px]">
                  <img class="w-[238px] h-[238px] text-center" :src="item.img" alt=" 图标" fit="cover" />
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
                <div class="text-lg mt-4 mb-2">{{ item.title }}</div>
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
                  class="flex justify-center items-center text-sm mt-8 bg-syGreyBg text-gray-400 w-[238px] h-[34px]">
                  {{ item.course }} <icon-right size="16" class="ml-1" />
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
  <!-- 音频播放器 -->
  <div v-if="isShowAudioPlayer" class="fixed bottom-0 left-0 right-0 bg-gray-400 w-full h-[90px]">
    <div class="w-[1300px] m-auto h-full flex items-center">
      <!-- left播放控制 -->
      <div class="w-[160px] h-full flex items-center justify-around">
        <icon-skip-previous-fill @click="handlePrevSong" style="color: white" size="30" />
        <icon-pause style="color: white" v-if="isPlaying" @click="handlePlay" size="40" />
        <icon-play-arrow-fill v-else @click="handlePlay" style="color: white" size="40" />
        <icon-skip-next-fill @click="handleNextSong" style="color: white" size="30" />
      </div>
      <!-- center播放进度条 -->
      <div class="flex-1 h-full bg-gray-400 flex items-center">
        <img class="ml-10 w-[68px] h-[68px]" src="@/assets/images/pubo.png" />
        <div>
          <div class="flex justify-between text-white ml-7">
            <div class="text-xs font-medium mr-1">
              <span v-if="isPlaying">{{ currentSong.title }}</span>
            </div>
            <div>
              <span class="text-xs font-medium mr-1">{{ formatTime(currentTime) }}</span>
              <span class="text-xs font-medium">/</span>
              <span class="text-xs font-medium ml-1">{{ formatTime(duration) }}</span>
            </div>
          </div>
          <a-slider v-model="currentTime" @change="handleSeek" :show-tooltip="false" :max="duration" class="ml-7"
            :step="0.1" :default-value="currentTime" :style="{ width: '680px' }" />
        </div>
      </div>
      <!-- right 功能按钮 -->
      <div class="w-[250px] h-full relative flex justify-around items-center text-white hover:cursor-pointer">
        <span @click="handleToPage">文稿</span>
        <span @click="handlePlayMultiplier">倍速</span>
        <span @click="handlePlayList">列表</span>
        <icon-close-circle-fill @click="handleCloseAudioPlayer" style="color: #000" size="35" />
        <!--播放倍数选择-->
        <div v-if="showPlayMultiplier"
          class="absolute -top-[160px] right-[120px] w-[73px] h-[162px] bg-[#222222] flex flex-col justify-around text-syGreyBg">
          <div v-for="(item, index) in multipleList" class="w-full h-[30px] flex items-center justify-center"
            :key="index">
            <span :class="item.id === currentRate ? 'font-bold text-base text-white' : ''" class="text-grey text-sm"
              @click="handleSelectPlayMultiplier(item)">{{ item.rate === 1.0 ? '正常语速' : `${item.rate}x` }}</span>
          </div>
        </div>
        <!-- 播放列表 -->
        <div v-if="showPlayList"
          class="absolute -top-[149px] pt-5 pr-6 pl-5 right-[50px] w-[612px] max-h-[149px] bg-[#222222] text-syGreyBg overflow-y-auto">
          <div class="flex justify-end w-full">
            <icon-close @click="closePlaylist" size="26" style="color: #a3a3a3ff" />
          </div>
          <div class="mt-2 flex justify-between items-center">
            <span class="text-sm">播放列表（{{ playlist.length }}）</span>
            <button class="w-[50px] h-[26px] border rounded-[40px] border-gray-400 flex justify-center items-center">
              清空
            </button>
          </div>
          <div class="mt-2">
            <div v-for="(item, index) in playlist" :key="index" class="flex justify-between items-center">
              <div :data-key="item" class="truncate w-[300px] mb-2 text-xs">{{ item.title }}</div>
              <div class="hover:cursor-pointer text-grey text-xs mr-2">删除</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, onUnmounted, reactive, ref, watch } from 'vue'
import listImg from '@/assets/images/pubo.png'
import song1 from '@/assets/周杰伦-不能说的秘密.mp3'
import song2 from '@/assets/周杰伦-退后.mp3'
import song3 from '@/assets/周杰伦-最长的电影.mp3'
import router from '@/router'
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
//当前播放器播放歌曲索引
const currentSongIndex = ref(0)
//播放状态
const isPlaying = ref(false)
//当前播放时间
const currentTime = ref(0)
//持续播放时间
const duration = ref(0)
//音量
const volume = ref(1)
// Audio 实例
const audioElement = ref<any>(null)
// 计算属性
const currentSong = computed(() => playlist[currentSongIndex.value])
//进度百分比
// const progressPercentage = computed(() => {
//   if (duration.value <= 0) return 0
//   return (currentTime.value / duration.value) * 100 || 0
// })
// 播放
const handlePlay = () => {
  //确保audioElement 已正确初始化
  if (!audioElement.value) return
  if (isPlaying.value) {
    audioElement.value.pause()
  } else {
    audioElement.value.play()
  }
  isPlaying.value = !isPlaying.value
}
// const changeSong = (index) => {
//   currentSongIndex.value = index
//   if (isPlaying.value) {
//     audioElement.value.play()
//   }
// }
// 下一首
const handleNextSong = () => {
  currentSongIndex.value = (currentSongIndex.value + 1) % playlist.length
}
// 上一首
const handlePrevSong = () => {
  currentSongIndex.value = (currentSongIndex.value - 1 + playlist.length) % playlist.length
}

//用户拖动进度条结束时的处理
const handleSeek = (value: number) => {
  console.log('%c [ 拖动结束 ]-253', 'font-size:13px; background:pink; color:#bf2c9f;')
  if (audioElement.value) {
    audioElement.value.currentTime = value
    if (isPlaying.value) audioElement.value.play()
  }
}
// 时间格式化函数（处理小数）
const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toFixed(1).padStart(4, '0')}` // 显示到小数点后1位
}

// 监听歌曲变化
watch(currentSong, (newSong) => {
  if (audioElement.value) {
    audioElement.value.pause()
    audioElement.value.src = newSong.src
    audioElement.value.load()
    if (isPlaying.value) {
      audioElement.value.play()
    }
  }
})

// 监听音量变化
watch(volume, (newVolume) => {
  if (audioElement.value) {
    audioElement.value.volume = newVolume
  }
})
// 生命周期钩子
onMounted(() => {
  //创建实例并指向当前歌曲
  audioElement.value = new Audio(currentSong.value.src)
  //时间更新监听(每秒触发四次)
  audioElement.value.addEventListener('timeupdate', () => {
    //驱动进度条、当前时间显示等UI更新
    currentTime.value = audioElement.value.currentTime
  })
  //元数据加载完监听（在音频元数据（时长、格式等）加载完成后触发）
  audioElement.value.addEventListener('loadedmetadata', () => {
    //获取音频时长
    duration.value = audioElement.value.duration
  })
  //播放结束监听
  audioElement.value.addEventListener('ended', handleNextSong)
})

//组件卸载时移除事件监听
onUnmounted(() => {
  if (audioElement.value) {
    audioElement.value.removeEventListener('timeupdate', currentTime)
    audioElement.value.removeEventListener('ended', handleNextSong)
    audioElement.value.pause()
    audioElement.value = null
  }
})

//handleToPage
const handleToPage = () => {
  // router.push({
  //   path: '/detail',
  //   query: {
  //     id: '1',
  //   },
  // })
}
//播放速率控制
const showPlayMultiplier = ref(false)
const currentRate = ref(2)
const multipleList = reactive([
  {
    id: 1,
    rate: 0.7,
  },
  {
    id: 2,
    rate: 1.0,
  },
  {
    id: 3,
    rate: 1.25,
  },
  {
    id: 4,
    rate: 2.0,
  },
])
// 播放倍速控制
const handleSelectPlayMultiplier = (item: any) => {
  console.log(item)
  currentRate.value = item.id
  if (audioElement.value) {
    audioElement.value.playbackRate = item.rate
  }
}
// 播放倍速显示
const handlePlayMultiplier = () => {
  showPlayMultiplier.value = !showPlayMultiplier.value
  showPlayList.value = false
}
//播放列表
const showPlayList = ref(false)
//播放列表显示
const handlePlayList = () => {
  showPlayList.value = !showPlayList.value
  showPlayMultiplier.value = false
}
//自定义指令
// const vOutsideClick = {
//   beforeMount: (el, binding) => {
//     el.clickOutsideEvent = (event) => {
//       if (!(el === event.target || el.contains(event.target))) {
//         binding.value(event);
//       }
//     };
//     document.addEventListener('click', el.clickOutsideEvent);
//   },
//   unmounted: (el) => {
//     document.removeEventListener('click', el.clickOutsideEvent);
//   },
// };

const closePlaylist = () => {
  //如果播放列表是展开的，就设置关闭
  if (showPlayList.value) {
    showPlayList.value = false
  }
}

//是否显示播放音频组件
const isShowAudioPlayer = ref(false)
//播放音频
const handlePlayAudio = async (item: any) => {
  if (audioElement.value) {
    isShowAudioPlayer.value = true
    try {
      await audioElement.value.play();
      //播放状态设置为true
      isPlaying.value = true;
      console.log('音频开始自动播放');
    } catch (error) {
      console.error('自动播放被阻止:', error);
    }
  }
}
//关闭底部音频组件
const handleCloseAudioPlayer = () => {
  isShowAudioPlayer.value = false
  if (audioElement.value) {
    audioElement.value.pause()
    isPlaying.value = false
  }
}
</script>
<style scoped>
/* 滚动条 样式 */
:deep(.arco-slider-track::before) {
  @apply h-[3px];
}

/* 前置样式 */
:deep(.arco-slider-bar) {
  @apply h-[3px] bg-red-600;
}

/* 进度条的点 */
:deep(.arco-slider-btn::after) {
  @apply border border-red-500;
}
</style>
