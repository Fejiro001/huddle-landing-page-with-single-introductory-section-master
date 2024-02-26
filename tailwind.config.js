/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html"],
  theme: {
    extend: {
      colors: {
        violet: "hsl(257, 40%, 49%)",
        "soft-magenta": "hsl(300, 69%, 71%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "open-sans": ["Open Sans", "serif"],
      },
    },
  },
  plugins: [],
};

