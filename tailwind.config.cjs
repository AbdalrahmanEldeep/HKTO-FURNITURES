/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
   theme: {
    colors:{
      "main":"#7E33E0",
      "primary":"#FB2E86",
      "scandry":"#9096B2",
      "white":"#fff",
      "light":"#C2C5E1",
      "black":"#000",
      "dark":"#0D0E50",
      "ltbg":"#F6F5FF"
    },
    fontFamily: {
      'main': ['"Josefin Sans"','sans-serif'],
      'primary': [ 'Lato sans-serif'],
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}

