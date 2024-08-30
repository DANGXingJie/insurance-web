<template>
  <div>
    {{ store.name }}
    faq Page

  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { getCardList } from '@/api/test'
const store = useUserStore()
const getInfo = async () => {
  const res = await getCardList()
  console.log(res)
}
getInfo()
</script>

<style scoped></style>