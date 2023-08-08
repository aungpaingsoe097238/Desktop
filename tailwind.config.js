/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CC6B49', 
        secondary: 'rgb(55, 82, 163)', 
        background: '#ebd1ae',
        hover: '#fff3e5',
        desktopHover: '#FFECE5' 
      },
    },
  },
  plugins: [],
}

