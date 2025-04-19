<template>
  <div class="bg-[#F8F8F8] min-h-screen w-full overflow-hidden">
    <div
      class="md:flex md:w-[1200px] w-[350px] h-[845px] m-auto md:mt-[90px] md:h-[558px] mt-[24px] bg-white shadow-light-500 rounded-[24px]">
      <!-- left -->
      <div class="md:pl-12 md:pt-10 pl-4 pt-4">
        <div
          class="font-bold md:text-[48px] md:w-[358px] md:leading-[56px] md:h-[132px] w-[328] h-[24px] text-xl text-left md:align-top">
          We’d
          love to
          hear from
          you.
        </div>
        <div class="md:mt-4 md:text-[18px] md:w-[375px] w-[318px] mt-2 text-base font-normal leading-6">
          If you have any questions about the subscription or you are not sure which plan is right for you, please contact
          our team.
        </div>
        <div class="md:mt-[56px] mt-8 md:w-[248px] w-[125px] md:h-[66px] h-[22px] flex flex-col justify-start">
          <p class="text-[14px] font-normal">Don’t like forms?</p>
          <div class="md:mt-[16px] mt-3 w-[248px] md:h-[66px] h-[26px] text-primary md:text-[20px] text-lg font-medium">
            Customer@Company.com
          </div>
        </div>
        <div class="mt-14 w-[240px] md:h-[78px] h-[74px]">
          <p class="text-sm font-normal text-black md:mb-4 mb-3">Social Media</p>
          <IconGroup class="-ml-5" />
        </div>
      </div>
      <!-- right -->
      <div class="md:ml-20 ml-4 md:w-[649px] md:h-[456px] md:mt-[51px] mt-8 w-[318px]">
        <a-form ref="formRef" :rules="rules" size="large" :model="form" layout="vertical" @submit="handleSubmit">
          <div class="flex md:w-[649px] w-[318px]">
            <div class="md:w-[312px] mr-6 w-[147px]">
              <a-form-item field="name" label="Full Name">
                <a-input class="w-[312px] h-[54px] rounded-[20px]" size="large" v-model="form.name"
                  placeholder="please enter your username..." />
              </a-form-item>
            </div>
            <div class="md:w-[312px] w-[147px]">
              <a-form-item field="name" label="Last Name">
                <a-input class="w-[312px] h-[54px] rounded-[20px]" size="large" v-model="form.name"
                  placeholder="please enter your username..." />
              </a-form-item>
            </div>
          </div>
          <a-form-item field="email" label="Email Address">
            <a-input class="w-[327px] h-[54px] rounded-[20px]" size="large" v-model="form.email"
              placeholder="please enter your post..." />
          </a-form-item>
          <a-form-item field="content" label="Email Address">
            <a-textarea v-memo="form.content" placeholder="Please enter something" allow-clear />
          </a-form-item>
          <a-form-item>
            <button
              class="w-[119px] h-[56px] md:mt-4 rounded-[20px] bg-secondary md:rounded-[24px] font-medium text-base text-black"
              html-type="submit">submit</button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconGroup from '@/components/IconGroup.vue'
import { Message } from '@arco-design/web-vue'
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const route = useRouter()
const form = reactive({
  name: 'admin',
  email: '5254xxxx@qq.com',
  password: '1234567877',
  content: "",
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
      validator: (value: string, cb: any) => {
        //邮箱格式
        if (value.match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)) {
          cb()
        } else {
          cb('请输入正确的邮箱格式')
        }
      },
    },
  ],
  content: [
    {
      required: true,
      message: 'content is required',
    },
  ],
}

const handleSubmit = ({ values, errors }: any) => {

  //提交表单
  console.log('values:', values, '\nerrors:', errors)
  Message.success('提交成功')
  //跳转登录
  route.push('/')
}

</script>

<style scoped>
:deep(.arco-input) {
  border-radius: 20px !important;
}

:deep(.arco-textarea) {
  height: 98px !important;
  border-radius: 20px !important;
}

:deep(.arco-form-item-content-wrapper) {
  border-radius: 20px !important;
}

:deep(.arco-btn) {
  @apply w-[119px] h-[56px] bg-secondary rounded-[24px] font-medium text-base;
}

:deep(.arco-divider-text) {
  @apply text-sm;
  color: #FAFAFA;
}
</style>