/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
      extend: {
        colors: {
          primary : '#0f9b0f',
          primary02 : 'rgba(15, 155, 15, 0.5)',
          title : '#fff',
          paragraph : '#f2f3f8'
        },
        fontFamily: {
          'sans': ["Poppins", "sans-serif"],
        },
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
    plugins: [],
  };