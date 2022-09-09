/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        mont: "'Montserrat', sans-serif",
        fra: "'Fraunces', serif"
      }, 
      colors: {
        darkCyan: "hsl(158, 36%, 37%)",
        hoverColor: "rgb(32, 73, 58)",
        cream: "hsl(30, 38%, 92%)",
        veryDarkBlue: "hsl(212, 21%, 14%)",
        darkGrayishBlue: "hsl(228, 12%, 48%)",
        wh8: "hsl(0, 0%, 100%)",
      },
      backgroundImage: {
        mobile: "url('../images/image-product-mobile.jpg')",
        desktop: "url('../images/image-product-desktop.jpg')"
      },
      letterSpacing: {
        perfume: ".4em"
      },
      maxWidth: {
        main : "548px"
      },
      height: {
        main: "410px"
      }
    },
  },
  plugins: [],
}
