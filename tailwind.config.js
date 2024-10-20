/** @type {import('tailwindcss').Config} */
export default {
  module: {
    prefix: 'tw-',
    important: true
  },
  content: [],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'homepage-bg': "url('@/app/assets/images/background.jpg')",
        'footer-texture': "url('@/assets/images/background.jpg')",
      }
    },
    fontFamily: {
      GBP: ['Gentium Book Plus', 'serif']
    },
    screens: {
      'desk1':{'min': '1600px', 'max': '1900px'},

      'desk2': {'min': '1300px', 'max': '1599px'},

      'desk3': {'min': '1000px', 'max': '1299px'},

      'tab': {'min': '640px', 'max': '999px'},

      'mob': {'max': '639px'},
    }
  },
  plugins: []
};
