
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#25253F',
        Neutral900: "hsl(243, 96%, 9%)",
        Neutral800: "hsl(243, 27%, 20%)",
        Neutral700: "hsl(243, 23%, 24%)",
        Neutral600: "hsl(243, 23%, 30%)",
        Neutral300: "hsl(240, 6%, 70%)",
        Neutral200: "hsl(250, 6%, 84%)",
        Neutral0: "hsl(0, 0%, 100%)",
        orange500: "hsl(28, 100%, 52%)",
        bblue500: "hsl(233, 67%, 20%)",
        bblue700: "hsl(248, 80%, 10%)",
        bgfrom:"#02012B",
        bgto:"#02012B",
        hover:"#2F2F49"
      },
      width: {
        custom: '1440px',
        '1/7': "14.2857%",
        100:"100px",
        200:"200px",
        250:"250px",
        300:"300px"
      },
      height: {
        minscreen: "calc(100vh/2)",
        "300": "300px",
        600: "600px",
        700: "700px",
        
      },
      textShadow: {
        md: "1px 1px 1px rgba(0,0,0,.5);"
      },
      maxWidth: {
        custome: "1440px"
      },minHeight:{
        200:"200px"
      }
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
    },
  ],
}