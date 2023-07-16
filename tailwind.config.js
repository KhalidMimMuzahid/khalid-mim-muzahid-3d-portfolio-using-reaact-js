/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",

        // "primary-lite": "#1FAB89",
        // "secondary-lite": "#62D2A2",
        // "tertiary-lite": "#9DF3C4",
        // "quaternary-lite": "#D7FBE8",

        "primary-lite": "#C9D6DF",
        "secondary-lite": "#5c6267",
        "tertiary-lite": "#282b2e",
        "quaternary-lite": "#1E2022",

        /* #F0F5F9, #C9D6DF,#52616B, #1E2022  #d88e26*/

        // "primary-lite": "#3C6255",
        // "secondary-lite": "#61876E",
        // "tertiary-lite": "#A6BB8D",
        // "quaternary-lite": "#EAE7B1",

        // "primary-lite": "#2F5D62",
        // "secondary-lite": "#5E8B7E",
        // "tertiary-lite": "#A7C4BC",
        // "quaternary-lite": "#DFEEEA",

        // "primary-lite": "#142850",
        // "secondary-lite": "#27496D",
        // "tertiary-lite": "#00909E",
        // "quaternary-lite": "#DAE1E7",

        // "primary-lite": "#1A374D",
        // "secondary-lite": "#406882",
        // "tertiary-lite": "#6998AB",
        // "quaternary-lite": "#B1D0E0",

        // "primary-lite": "#071952",
        // "secondary-lite": "#0B666A",
        // "tertiary-lite": "#35A29F",
        // "quaternary-lite": "#97FEED",

        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
