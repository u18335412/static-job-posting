module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        desaturatedCyan: "hsl(180, 29%, 50%)",
        lightGrayishCyanBackground: "hsl(180, 52%, 96%)",
        lightGrayishCyanFilterTablets: "hsl(180, 31%, 95%)",
        darkGrayishCyan: "hsl(180, 8%, 52%)",
        veryDarkishCyan: "hsl(180, 14%, 20%)",
      },
    },
  },
  variants: {
    extend: {
  
    },
  },
  plugins: [],
};
