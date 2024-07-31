/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        primary: "#FF8C01",
        secondary: "#FF4E00",
        tertiary: "#FFA30A",
        quartiary: "#F9ED41",
        quinary: "#FFF6D3",

        silver:{
          50:"#F4F4F4",
          100: "#EFEFEF",
          200: "#DCDCDC",
          300: "#BDBDBD",
          400: "#989898",
          500: "#7C7C7C"
        },
      },
      backgroundImage: {
        'gradientPrimary': 'linear-gradient(129deg, #fd8324 31%, #ff4e00 104%)',
        'gradientSecondary': "linear-gradient(142deg,#ffba4b 18%,#ff8300 82%)"
      },
    },
  },
  plugins: [require('daisyui'),],

  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}

