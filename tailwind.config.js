/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: '#87064b',
      },
      flex: {
        '2': '0 0 50%'
      },
    },
  },
  plugins: [],
}

