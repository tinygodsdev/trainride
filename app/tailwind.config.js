const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
    './index.html',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gabriela': ['Gabriela', 'serif'],
        'marck': ['Marck Script', 'cursive'],
        'raleway': ['Raleway', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

