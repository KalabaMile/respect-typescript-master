/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#BDBDBD",
        "primary-300": "#162F65",
        "primary-500": "#252525",
        "secondary-400": "#E8AF30",
        "secondary-500": "#FFB921",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"]
      },
      backgroundImage: {
        hero: "url('./src/assets/naslovnaimage.jpg')",
        hero2: "url('./src/assets/bgimage.jpg')"
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
