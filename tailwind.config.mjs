/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('../b1.jpg')"
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
