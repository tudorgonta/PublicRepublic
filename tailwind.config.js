module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
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
       },
       backgroundImage: {
        'hero-pattern': "url('https://cdn.sanity.io/images/9n9rrysx/production/d934c68d94b1d08ac9bc784dff6ed3f3220785a6-6720x4480.jpg')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ], 
}