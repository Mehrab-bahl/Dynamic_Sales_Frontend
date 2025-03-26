/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/element-plus/**/*.{js,vue,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-bg': "url('@/assets/login-bg.jpeg')",
      },
      colors: {
        primary: '#156b0d',
        secondary: '#117508',
      },
    },
  },
  plugins: [require('daisyui')],
}
