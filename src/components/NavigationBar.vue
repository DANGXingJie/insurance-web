<template>
  <div :class="navBgColor" class="overflow-hidden">
    <div class="m-auto flex justify-between items-center md:w-[1200px] md:h-[54px] md:mt-5 w-[350px] h-[24px] mt-4">
      <div class="flex items-center">
        <img class="w-[24px] h-[24px] md:w-[40px] md:h-[40px]" fit="cover" src="../assets/images/logo-img.png" />
        <span class="text-[16px] ml-[6px] md:ml-2 md:text-xl font-medium text-primary">Insurance</span>
      </div>
      <div :class="currentKey == 0 ? 'text-white' : 'text-dark'"
        class="text-[16px] font-medium hidden md:block hover:cursor-pointer">
        <ul class="flex justify-evenly">
          <template v-for="(item, index) in navList" :key="index">
            <li class="mr-[48px] nav-item" :data="index" @click="handleMenuClick(item, 1)"
              :class="currentKey === index ? 'nav-item-active nav-item-active-text ' : ''">
              {{ item.name }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <div class="flex flex-col items-center md:items-center md:flex-row">
          <button @click="handleLogin" :class="currentKey == 0 ? 'bg-bgColorDark' : 'bg-white'"
            class="w-[103px] h-[46px] rounded-[20px] border border-primary text-sm text-primary font-medium hidden md:block">
            Login
          </button>
          <div v-if="false" class="absolute top-10 right-2 md:top-0 md:right-0 md:ml-4 md:relative">
            <a-switch size="large" :default-checked="false" :model-value="switchTheme" @change="handleSwitchTheme"
              :checked-value="true" :unchecked-value="false" checked-color="#000033">
              <template #checked-icon>
                <icon-moon />
              </template>
              <template #unchecked-icon>
                <icon-sun />
              </template>
            </a-switch>
          </div>
        </div>
        <!-- 汉堡菜单 -->
        <div class="block md:hidden" @click="handleShowMenu">
          <a-space size="large">
            <icon-menu :style="{ fontSize: '16px', color: currentKey == 0 ? '#fff' : '#000' }" />
          </a-space>
        </div>
      </div>
    </div>
  </div>
  <!-- 移动设备下左侧菜单 -->
  <a-drawer :width="340" :height="340" :visible="visible" :hideCancel="true" :header="true" :footer="false"
    :placement="'left'" class="relative" @ok="handleOk" @cancel="handleCancel" unmountOnClose>
    <template #title>
      <span class="text-[16px] ml-[6px] font-medium text-primary">Insurance</span>
    </template>
    <div>
      <ul class="flex justify-evenly flex-col">
        <template v-for="(item, index) in navList" :key="index">
          <li class="mt-[48px] nav-item ml-1 h-[24px] leading-[24px]" :data="index" @click="handleMenuClick(item, 2)"
            :class="currentKey === index ? 'nav-item-active-h5 nav-item-active-text ' : ''">
            {{ item.name }}
          </li>
        </template>
      </ul>
    </div>
    <div class="absolute left-4 bottom-6">
      <button @click="handleLogin"
        class="w-[82px] h-[36px] rounded-[15px] border border-primary text-sm text-primary font-medium">
        Login
      </button>
    </div>
  </a-drawer>
</template>
<script setup lang="ts">
import { IconMenu } from '@arco-design/web-vue/es/icon'
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
const route = useRouter()
const currentKey = ref(0)
const switchTheme = ref(false)
//暗色模式切换
const handleSwitchTheme = (ev: Event) => {
  switchTheme.value = !switchTheme.value
  if (switchTheme.value) {
    // 设置为暗黑主题
    document.body.setAttribute('arco-theme', 'dark')
    console.log(ev)
  } else {
    // 设置为明亮主题
    document.body.setAttribute('arco-theme', 'light')
  }
}
const navList = reactive([
  {
    id: 0,
    name: 'Home',
    path: '/layout/home',
  },
  {
    id: 1,
    name: 'Services',
    path: '/layout/services',
  },
  {
    id: 2,
    name: 'About',
    path: '/layout/about',
  },
  {
    id: 3,
    name: 'FAQ',
    path: '/layout/faq',
  },
  {
    id: 4,
    name: 'Contact',
    path: '/layout/contact',
  },
])
const visible = ref(false)
const handleShowMenu = () => {
  console.log('click')
  visible.value = true
}
const handleOk = () => {
  visible.value = false
}
const handleCancel = () => {
  visible.value = false
}
//点击nav时
const handleMenuClick = (e: any, type: number) => {
  if (type === 2) {
    currentKey.value = e.id
    visible.value = false
    route.push(e.path)
  } else {
    currentKey.value = e.id
    route.push(e.path)
  }
}
//登录
const handleLogin = () => {
  route.push('/login')
}
//计算属性动态调整导航栏背景色和文字颜色
const navBgColor = computed(() => {
  switch (currentKey.value) {
    case 0:
      return 'text-primary bg-bgColorDark'
    case 3:
      return 'text-dark bg-syGreyBg'
    case 4:
      return 'text-dark bg-syGreyBg'
    default:
      return 'text-dark bg-bgColorGrey'
  }
})
</script>

<style scoped>
.nav-item {
  @apply relative;
}

.nav-item-active::before {
  content: '';
  @apply absolute -bottom-[6px] h-[2px] w-full bg-primary opacity-100 transition-all;
}

.nav-item-active-h5::before {
  content: '';
  @apply absolute -left-1 w-[2px] h-[24px] bg-primary opacity-100 transition-all;
}

.nav-item-active-text {
  @apply text-primary;
}
</style>
