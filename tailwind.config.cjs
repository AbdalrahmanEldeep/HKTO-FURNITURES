/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
   theme: {
    colors:{
      "main":"#FB2E86",
      "primary":"#7E33E0",
      "scandry":"#9096B2",
      "white":"#fff",
      "light":"#C2C5E1",
      "black":"#000",
      "dark":"#0D0E43",
      "ltbg":"#F6F5FF"
    },
    fontFamily: {
      'main': ['"Josefin Sans"','sans-serif'],
      'primary': [ 'Lato sans-serif'],
    },
    fontSize: {
      ex:".8rem"
    }
  },
  plugins: [],
}

