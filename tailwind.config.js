/** @type {import('tailwindcss').Config} */
export default {
  module: {
    prefix: 'tw-',
    important: true
  },
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue',
    './app/error.vue'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'homepage-bg': 'url(\'@/app/assets/images/background.jpg\')',
        'footer-texture': 'url(\'@/app/assets/images/background.jpg\')'
      }
    },
    fontFamily: {
      GBP: ['Gentium Book Plus', 'serif'],
      rouge: ['Rouge Script', 'cursive'],
      tangerine: ['Tangerine', 'cursive'],
      smooch: ['Smooch Sans', 'sans-serif']
    },
    screens: {
      desk1: { min: '1600px' },

      desk2: { min: '1300px', max: '1599px' },

      desk3: { min: '1000px', max: '1299px' },

      tab: { min: '640px', max: '999px' },

      mob: { max: '639px' }
    }
  },
  plugins: []
};
