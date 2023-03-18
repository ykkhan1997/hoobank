/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      colors:{
        primary:"#09203F",
        secondary:"#39bfd2",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        discount_gradient:"#192b41"
      },
      fontFamily:{
        poppins:["Poppins,sans-serif"],
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  
  plugins: [],
}
