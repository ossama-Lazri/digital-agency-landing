/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        header: '#FFF7F0',
      },
      height: {
        header: '50.5rem',
      },
      fontFamily: {
        poppinsLight: 'poppinsLight',
        poppinsRegular: 'poppinsRegular',
        poppinsMedium: 'poppinsMedium',
        poppinsSemiBold: 'poppinsSemiBold',
        poppinsBold: 'poppinsBold',
        poppinsExtraBold: 'poppinsExtraBold',
      },
    },
    screens: {
      'sm': '640px', 
      'md': '768px', 
      'lg': '1024px',
      'xl': '1280px',   
    },
  },
  plugins: [],
}