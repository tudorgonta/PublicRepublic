module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        Monsieur: ['Monsieur La Doulaise', 'cursive'],
        Roboto: ['Roboto', 'sans-serif'],
        Tangerine: ['Tangerine', 'cursive'],
        Rubik: ['Rubik', 'open-sans'],
        Dancing: ['Dancing Script', 'cursive'],
        Romantica: ['Romantica'],
        Bulkey: ['Bulkey'],
       },
    },
  },
  plugins: [
  ],
}