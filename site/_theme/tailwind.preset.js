// const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sarabun', 'sans-serif']
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography')
  ],
};
