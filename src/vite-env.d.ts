/// <reference types="vite/client" />
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
declare module '*.vue' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}

declare module '@/assets/images/*' {
  const value: string
  export default value
}
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.svg'
