<template>
  <div class="min-w-[375px] md:w-full min-h-screen bg-white">
    <div class="md:min-w-[1920x] m-auto flex">
      <div class="min-w-[375px] md:w-[760px] m-auto md:m-0 min-h-screen flex flex-col">
        <div
          class="w-[350px] m-auto mt-12 md:w-[520px] md:mt-[80px] md:ml-[120px] md:mb-[154px] md:mr-[120px] md:h-[790px]">
          <div class="flex w-full items-center justify-center">
            <img class="w-[24px] h-[24px] md:w-[40px] md:h-[40px]" fit="cover" src="@/assets/images/logo-img.png" />
            <span class="text-[16px] ml-[6px] md:ml-2 md:text-xl font-medium text-primary">Insurance</span>
          </div>
          <div class="mt-8 text-2xl text-center md:font-medium">
            {{ loginType.title }}
          </div>
          <div class="mt-2 text-base text-center md:pl-[68.5px] md:pr-[68.5px] font-normal text-secondaryDark">
            {{ loginType.text }}
            <span @click="handleLogin" class="text-secondary cursor-pointer">{{ loginType.link }}</span>
          </div>
          <div class="mt-[24px] md:mt-[18px] md:w-[520px] m-auto">
            <a-form ref="formRef" :rules="rules" size="large" :model="form" layout="vertical" @submit="handleSubmit">
              <a-form-item v-if="!currentloginType" field="name" label="Full Name">
                <a-input class="w-[327px] h-[54px] rounded-[20px]" size="large" v-model="form.name"
                  placeholder="please enter your username..." />
              </a-form-item>
              <a-form-item field="email" label="Email Address">
                <a-input class="w-[327px] h-[54px] rounded-[20px]" size="large" v-model="form.email"
                  placeholder="please enter your post..." />
              </a-form-item>
              <a-form-item field="password" label="Create password">
                <a-input-password class="w-[327px] h-[54px] rounded-[20px]" v-model="form.password"
                  v-model:visibility="isVisibiity" placeholder="Please enter something" :defaultVisibility="true"
                  allow-clear />
              </a-form-item>
              <a-form-item field="isRead">
                <a-checkbox v-model="form.isRead">
                  Confirm that you accept our Terms of use and Privacy Policy
                </a-checkbox>
              </a-form-item>
              <a-form-item>
                <button
                  class="w-[350px] h-[46px] md:w-[520px] md:h-[56px] rounded-[20px] bg-secondary md:rounded-[24px] font-medium text-base text-white"
                  html-type="submit">{{ currentloginType ? 'login' : 'sign up' }}</button>
              </a-form-item>
            </a-form>
            <div class="mt-8">
              <a-divider orientation="center">Or Sign Up with</a-divider>
            </div>
          </div>
          <div class="mt-8 flex pb-[96px]">
            <div
              class=" w-[169px] md:w-[254px] h-[44px] rounded-[20px] md:rounded-[16px] border bgColorGrey flex items-center">
              <icon-google class="m-3" size="20px" />
              <div class="w-[182px] h-[22px] ml-3 flex justify-center items-center">
                <span class="ml-[10px] text-sm text-dark">Google</span>
              </div>
            </div>
            <div
              class="w-[169px] md:w-[254px] h-[44px] rounded-[20px] md:rounded-[16px] border bgColorGrey ml-3 flex items-center">
              <icon-lark-color class="m-3" size="20px" />
              <div class="w-[182px] h-[22px] ml-3 flex justify-center items-center">
                <span class="ml-[10px] text-sm text-dark">Feishu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden md:block md:flex-1">
        <div class="min-h-screen bg-login-right"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Message } from '@arco-design/web-vue'
import { useRouter } from 'vue-router'
const route = useRouter()
const isVisibiity = ref(true)
const form = reactive({
  name: 'admin',
  email: '45412445@qq.com',
  password: '1234567877',
  isRead: false,
})

const rules = {
  name: [
    {
      required: true,
      message: 'name is required',
    },
  ],
  email: [
    {
      required: true,
      message: 'email is required',
    },
    {
      //验证规则
      validator: (value, cb) => {
        //邮箱格式
        if (value.match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)) {
          cb()
        } else {
          cb('请输入正确的邮箱格式')
        }
      },
    },
  ],
  password: [
    {
      required: true,
      message: 'password is required',
    },
    {
      //验证规则
      validator: (value, cb) => {
        //密码长度5-8位
        if (value.length >= 5 || value.length <= 8) {
          cb()
        } else {
          cb('请输入5-8位的密码')
        }
      },
    },
  ],
}

const handleSubmit = ({ values, errors }) => {
  //如果没有同意协议，则弹出对话
  if (!form.isRead) {
    Message.warning('请先同意协议')
    return
  }
  //提交表单
  console.log('values:', values, '\nerrors:', errors)
  Message.success('提交成功')
  //跳转登录
  route.push('/')
}

const loginType = reactive({
  text: '',
  link: '',
  title: '',
})

const signUp = reactive({
  title: 'Create an account to continue',
  text: 'It’s free to create an account and get your event live.Already have an account? ',
  link: 'Log in',
})

const login = reactive({
  title: 'Good to see you again 👋',
  text: 'Don’t have an account? ',
  link: 'sign Up',
})
//true:login false:signUp 控制登录类型
const currentloginType = ref(false)

const handleLogin = () => {
  currentloginType.value = !currentloginType.value
  //如果是登录，就把文案改成login,full name
  if (currentloginType.value) {
    loginType.text = login.text
    loginType.link = login.link
    loginType.title = login.title
  } else {
    loginType.text = signUp.text
    loginType.link = signUp.link
    loginType.title = signUp.title
  }
}

const init = () => {
  loginType.text = signUp.text
  loginType.link = signUp.link
  loginType.title = signUp.title
}
init()
</script>

<style scoped>
.bg-login-right {
  background: url('../../assets/images/login-bg.png') no-repeat;
  background-position: center;
  background-size: cover;
}

:deep(.arco-input) {
  border-radius: 20px !important;
}

:deep(.arco-form-item-content-wrapper) {
  border-radius: 20px !important;
}

:deep(.arco-btn) {
  @apply w-[350px] h-[46px] bg-secondary rounded-[24px] font-medium text-base;
}

:deep(.arco-divider-text) {
  @apply text-sm text-secondaryDark;
}
</style>
