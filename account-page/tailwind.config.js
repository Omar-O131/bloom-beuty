/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f062a7',
          light: '#fce7ef',
        },
        secondary: {
          DEFAULT: '#f4a2b7',
          light: '#fce7ef',
        },
        dark: {
          DEFAULT: '#352326',
          footer: '#2d1f21',
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
        display: ['Roboto', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
