/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },
      colors:{
        'red-clean-type':'#E62727'
      },
      backgroundImage:{
        'dec-angle':'url("./src/assets/img/decAngle.png")'
      }
    },
  },

  plugins: [],
}

