/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#0047AB',
        'secondary':'#44becf',
        'custom-blue': '#EAEFFF',
        'custom-background': '#606366'
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      keyframes: {
        "fade-right": {
          from:{
            opacity: "1",
            transform: "translateY(0)"
          },
          "to": {
            opacity: "0",
            transform: "translateY(40%)"
          }
        },
      },
      animation: {
        "fade-right": "fade-right 0.5s ease-out forwards",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}