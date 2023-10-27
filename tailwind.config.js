/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./Screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    // './navigator/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bgBlack: "#1E1E1E",
        bgWhite: "#fff",
        bgColor: "#E7E7E7",
        selectInput: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
