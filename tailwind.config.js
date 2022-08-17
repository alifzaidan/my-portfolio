/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#545454',
          secondary: '#F4F1EE',
          bg: '#FFFDFC',
        },
        dark: {
          primary: '#c6c6c6',
          secondary: '#091521',
          bg: '#020A13',
        },
        focus: '#E1E1E1',
      },
      keyframes: {
        arrow: {
          '0%, 100%': {
            transform: 'translateX(-75%)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
          '50%': {
            transform: 'translateX(0)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
        },
      },
      animation: {
        arrow: 'arrow 1s infinite',
      },
    },
  },
  plugins: [],
};
