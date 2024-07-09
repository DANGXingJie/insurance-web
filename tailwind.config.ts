/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  corePlugins: {
    preflight: true,
  },
  theme: {
    extend: {
      colors: {
        primary: '#42b983', // 主题色 蓝色
        secondary: '#61666A', // 次要色 深灰色
        prohibit: '#889096', // 禁用色 浅灰色
        dark: '#171717ff', // 字体色 深黑色
        textdark: '#0C1220', // 字体色 深黑色
        danger: '#FF4D4D', // 危险色 红色
        lightgray: '#E4E4E4',
        effect: 'rgba(109, 141, 214, 0.10)', // 外部阴影颜色
        bgColorDark: '#151d38ff',
        secondaryDark: '#525252ff', // 次要色 深灰色
        grey: '#a3a3a3ff', // 次要色 深灰色
        bgColorGrey: '#f5f5f5ff', // 背景色灰色
        bgColorLight: '#e5e5e5ff',
      },
      fontSize: {
        '2xs': ['10px', '15px'],
        '3xs': ['8px', '13px'],
      },
      boxShadow: {
        default: '0px 3px 16px 0px rgba(109,141,214,0.10)',
      },
    },
  },
  plugins: [],
}
