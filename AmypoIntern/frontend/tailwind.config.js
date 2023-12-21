/** @type {import('tailwindcss').Config} */

//const withMT = require("@material-tailwind/react/utils/withMT");
//const withForms = require("@tailwindcss/forms");
// const withDarkMode = require("tailwindcss-dark-mode");

module.exports = {
  darkMode: "class",
  // darkMode: "media",
  content: [
    "./src/**/*.{html,js,jsx}",

  ],

  theme: {
    colors: {
      lightwhite: "#fbf8f6",
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      blue: "#4c3ed8",
      bgblue:"#dee8ff",
      silver: "#ecebff",
      bermuda: "#78dcca",
      gray: "#f5f5f6",
      lightgray: "#747579",
      dimgray:"#F8F8F8",
      lightpurple: "#857be4",
      hoverpurple: "#edecfb",
      bgpurple: "#ededfb",
      dot: "#f7c32e",
      bordergray: "#9b9c9f",
      red: "#d6293e",
      black: "#000000",
      darkblue: "#0f172a",
      buttonblue: "#0057ff",
      hoverblue:"#0d00ff",
      loginborder: "#e5e5e5",
      lightgreen: "#e6f8f3",
      peach: "#fbe9eb",
      lightred: "#fbe9eb",
      skyblue: "#e7f6f8",
      goldstar: "#f7c32e",
      bluegray: "#222529",
      darkgray: "#4b4b4b",
      darkgray1: "#191b1d",
      brightgreen: "#0cbc87",
      hovergray: "#dfdfe3",
      lightgray2: "#F0F1F2",
      facebook: "#5D82D1",
      instagram: "#C22B72",
      twitter: "#40BFF5",
      linkedin: "#238CC8",
      lightorange: "#fff2e7",
      orange: "#fda36d",
      aqua: "#d1e7dd",
      darkgreen: "#146c43",
      turquese: "#17a2b8",
      bggreen:"#1F4B3F",
      bggreen1:"#5bbb7b1a",
      buttongreen:"#5bbb7b",
      textbg1:"#FFEDE8",
      footerbg:"#222222",
      textgray:"#FFFFFFA1"
    },

    fontFamily: {
      // 'sans': ['ui-sans-serif', 'system-ui'],
      // 'serif': ['ui-serif', 'Georgia', ...],
      // 'mono': ['ui-monospace', 'SFMono-Regular', ...],
      // 'display': ['Oswald', ...],
      dmsans: ["DM Sans", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      productsansr: ["productsans-regular"],
      productsansb: ["productsans-bold"],
    },
    extend: {
      // ...
      darkMode: "class",
    },

    extend: {
      backgroundImage: {
        'layout1bg' : "url('/src/Assets/layoutbg.png')",
        'contactusbg' : "url('/src/Assets/contactusbg1.jpg')"
      },
    },
  },
  plugins: [],
};