/** @type {import('tailwindcss').Config} */
//eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily:{
      sans:"Roboto Mono, monospace", 
    },
    
    extend: {
      fontSize:{
        huge:["80rem", {lineHeight:"1"}],
      },
      height:{
        screeb:"100dvh",
      },
    },
  },
  plugins: [],
};
