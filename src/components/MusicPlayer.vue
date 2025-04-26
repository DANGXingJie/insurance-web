<template>
  <!-- 音频播放器 -->
  <div v-if="isShowAudioPlayer"
    class="fixed md:bottom-0 bottom-6 left-0 right-0 bg-[#757779] w-full md:h-[90px] h-[49px]">
    <div class="md:w-[1330px] w-[414px] m-auto h-full flex items-center">
      <!-- left播放控制 -->
      <div class="md:w-[170px] w-[100px] h-full flex items-center justify-around">
        <icon-skip-previous-fill @click="handlePrevSong" style="color: white" :size="isMobile ? 25 : 35" />
        <icon-pause style="color: white" v-if="isPlaying" @click="handlePlay" :size="isMobile ? 30 : 40" />
        <icon-play-arrow-fill v-else @click="handlePlay" style="color: white" :size="isMobile ? 30 : 40" />
        <icon-skip-next-fill @click="handleNextSong" style="color: white" :size="isMobile ? 25 : 35" />
      </div>
      <!-- center播放进度条 -->
      <div class="flex-1 h-full bg-[#757779] flex items-center">
        <img class="md:ml-10 ml-2 md:w-[68px] md:h-[68px] w-8 h-8" src="@/assets/images/pubo.png" />
        <div>
          <div class="flex justify-between text-white md:ml-7 ml-4">
            <div class="md:text-sm text-xs font-medium mr-1">
              <span v-if="isPlaying">{{ currentSong.title }}</span>
            </div>
            <div>
              <span class="text-xs font-medium mr-1">{{ formatTime(currentTime) }}</span>
              <span class="text-xs font-medium">/</span>
              <span class="text-xs font-medium ml-1">{{ formatTime(duration) }}</span>
            </div>
          </div>
          <a-slider v-model="currentTime" @change="handleSeek" :show-tooltip="false" :max="duration"
            class="md:ml-7 ml-4" :step="0.1" :default-value="currentTime"
            :style="{ width: isMobile ? '240px' : '700px' }" />
        </div>
      </div>
      <!-- right 功能按钮 -->
      <div
        class="md:w-[250px] w-[120px] md:mr-0 mr-1 text-xs md:text-sm h-full relative flex md:justify-around justify-end items-center text-white hover:cursor-pointer">
        <div class="md:w-[170px] justify-around items-center md:flex hidden">
          <span>文稿</span>
          <span @click="handlePlayMultiplier">倍速</span>
          <span @click="handlePlayList">列表</span>
        </div>
        <icon-close-circle-fill @click="handleCloseAudioPlayer" style="color: #000" :size="isMobile ? 25 : 35" />
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
          <div class="mt-2 mb-2">
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
interface Song {
  title: string
  src: string
}
const props = defineProps({
  isShowAudioPlayer: { type: Boolean, default: false },
  isMobile: { type: Boolean, default: false },
  playlist: { type: Array as () => Song[], default: () => [] },
})
const emit = defineEmits(['closeAudioPlayer'])
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
const currentSong = computed(() => props.playlist[currentSongIndex.value])
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
// 下一首
const handleNextSong = () => {
  currentSongIndex.value = (currentSongIndex.value + 1) % props.playlist.length
  //切换成功自动播放
  audioElement.value.play()
}
// 上一首
const handlePrevSong = () => {
  currentSongIndex.value = (currentSongIndex.value - 1 + props.playlist.length) % props.playlist.length
  //切换成功自动播放
  audioElement.value.play()
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
  //初始化瀑布流高度
  //initHeight()
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

const closePlaylist = () => {
  //如果播放列表是展开的，就设置关闭
  if (showPlayList.value) {
    showPlayList.value = false
  }
}

//是否显示播放音频组件
const isShowAudioPlayer = ref(false)
//播放音频
const playAudio = async (item: any) => {
  if (audioElement.value) {
    isShowAudioPlayer.value = true
    try {
      await audioElement.value.play()
      //播放状态设置为true
      isPlaying.value = true
      console.log('音频开始自动播放', item)
    } catch (error) {
      console.error('自动播放被阻止:', error)
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
//暴露方法给父组件调用
defineExpose({
  playAudio,
})
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
