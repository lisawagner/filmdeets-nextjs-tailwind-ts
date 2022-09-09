/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    gridTemplateColumns: {
      'auto-fill': 'repeat(auto-fill, minmax(200px, 1fr))'
    },
    extend: {
      height: {
        128: '40rem'
      },

      keyframes: {
        floating: {
          '0%': {transform: 'translateY(-15px)'},
          '50%': {transform: 'translateY(0)'},
          '100%': {transform: 'translateY(-15px)'},
        },
        growing: {
          '0%': {transform: 'scale(0.7)'},
          '50%': {transform: 'scale(1)'},
          '100%': {transform: 'scale(0.7)'},
        }
      },
      animation: {
        floating: 'floating 2s infinite',
        growing: 'growing 2s infinite',
      }

      

    },
    fontFamily: {
      opensans: ['Open Sans', 'sans-serif']
    }
  },
  plugins: [],
}
