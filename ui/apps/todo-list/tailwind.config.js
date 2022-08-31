/** @type {import('tailwindcss').Config} */
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'src/**/*!(*.stories|*.spec).{ts,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: 'rgb(194, 72, 75)',
          600: 'rgba(194, 72, 75, 0.6)',
          500: 'rgba(194, 72, 75, 0.5)',
          400: 'rgba(194, 72, 75, 0.4)',
          300: 'rgba(194, 72, 75, 0.3)',
          200: 'rgba(194, 72, 75, 0.2)',
          100: 'rgba(194, 72, 75, 0.1)',
        },
        secondary: 'orange',
        tertiary: 'blue',
      },
    },
  },
  plugins: [],
};
