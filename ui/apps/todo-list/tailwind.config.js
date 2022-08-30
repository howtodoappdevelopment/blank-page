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
          300: 'rgba(194, 72, 75, 0.3)',
        },
        secondary: 'orange',
        tertiary: 'blue',
      },
    },
  },
  plugins: [],
};
