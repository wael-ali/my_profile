module.exports = {
  // purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#36393f',
        secondary: '#2f3136',
        teritary: '#202225'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
