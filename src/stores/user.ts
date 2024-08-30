import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
export const useUserStore = defineStore(
  'userStore',
  () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    function increment() {
      count.value++
    }
    const name = ref('Card Store信息')
    const token = ref('')
    const setToken = (value: string) => {
      token.value = value
    }
    const getToken = () => {
      return token.value
    }
    return { count, doubleCount, increment, name, token, setToken, getToken }
  },
  //持久化配置
  {
    persist: true,
  }
)
