/** @types {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: true
  },
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {}
  },
  plugins: []
};
