/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'batman-yellow': {
         100 : '#F8F805 ',
         200: ' #A79429'
        },
        'background1' : '#232834',
        'background2' : '#191919',
        'background3' : ' #05181e',
        
      }
    },
    
  },
  plugins: [],
}