/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/sally-and-mcquin.jpg')",
        'kiss': "url('/kiss.png')",
      }
    },
  },
  plugins: [],
}

