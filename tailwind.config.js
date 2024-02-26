/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        violet: "hsl(257, 40%, 49%)",
        "soft-magenta": "hsl(300, 69%, 71%)",
        "hover-color": "hsl(300, 90%, 80%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "open-sans": ["Open Sans", "serif"],
      },
      backgroundImage: {
        "desktop-pattern": "url(/assets/images/bg-desktop.svg)",
        "mobile-pattern": "url(/assets/images/bg-mobile.svg)",
      },
    },
  },
  plugins: [],
};

