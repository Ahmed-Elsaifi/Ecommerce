
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     container:{
       center:true,
       padding:'20px'
      
    },
    extend: {
      colors:{
        'main-color':'#0aad0a',
        'light-color':'#f0f3f2',
        'rating-color':'#ffc908',
        'secend-color':'#2563eb'
      }
    },
  },
  plugins: [
],
}