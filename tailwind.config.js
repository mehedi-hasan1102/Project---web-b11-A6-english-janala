
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./*.html"], 
    theme: {
      extend: {
        fontFamily: {
          sans: ["Hind Siliguri", "sans-serif"],
        },
        fontSize: {
          custom: "32px",
        },
        lineHeight: {
          custom: "52px",
        },
      },
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: ["light"],
    },
  };

  
  