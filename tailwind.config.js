/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        background: '#121313',
        primary: '#BB89F4',
        primaryDark: '#27212E',
        secondary: '#03D7BE',
        gray: '#2F2E2F',
        black: '#121313',
        white: '#AFAFAE',
        whiteHover: '#ECECEC',
        grayHover: '#474747',
      },
      fontFamily: {
        Poppins: 'poppins',
        Chivo: 'chivo mono',
      }
    },
  },
  plugins: [],
}