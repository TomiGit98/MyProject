/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '1/1': '1 / 1',
        '4/3': '4 / 3',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'md-custom': '0 0px 4px 0px rgb(0 0 0 / 0.1), 0 0px 4px 0px rgb(0 0 0 / 0.1)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
