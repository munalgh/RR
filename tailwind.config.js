export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#ecf0ff',
          text: '#121212',
        },
        dark: {
          bg: '#0c1337', 
          text: '#ffffff',
        }
      }
    },
  },
  plugins: [],
}