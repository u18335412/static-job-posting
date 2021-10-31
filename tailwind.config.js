const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        sm: ['14px', '20px'],
        base: ['15x', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
      colors: {
        desaturatedCyan: "hsl(180, 29%, 50%)",
        lightGrayishCyanBackground: "hsl(180, 52%, 96%)",
        lightGrayishCyanFilterTablets: "hsl(180, 31%, 95%)",
        darkGrayishCyan: "hsl(180, 8%, 52%)",
        veryDarkishCyan: "hsl(180, 14%, 20%)",
      },
      fontFamily: {
        sans: ["Spartan", ...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif],
        mono: [...defaultTheme.fontFamily.mono],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
