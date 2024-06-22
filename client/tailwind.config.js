/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF8400',
        secondary: '#ffffff',
      },
      fontFamily: {
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
