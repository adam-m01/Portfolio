/** @type {import('tailwindcss').Config} */


module.exports = {
  darkMode:"class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backdropBlur:{
        extra: '105px',
      },
      colors:{
        navGrey: "#2a2b37",
        navBlue: "#4b8dd9",
        deepBlue:"#05050F",
        darkText:"#000000",
        darkBg: "#4b8dd9",
        darkBorder:"#3e7bc1",
      },
      fontFamily:{
        poppins: ["Poppins"," sans-serif"],
      },
    },
  },
  plugins: [],
}