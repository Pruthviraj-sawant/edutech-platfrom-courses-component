/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bgDark: "#22223b",
      },
      backgroundImage: {
        bgDark2: 'linear-gradient(135deg, #0B0C20, #4A4E69, #1B3A61, #000428, #004e92, #434343)',
      },
    },
  },
  plugins: [],
};
