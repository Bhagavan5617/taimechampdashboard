/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addComponents }) {
      addComponents({
        /* Default - Hide Scrollbar */
        ".custom-scrollbar::-webkit-scrollbar": {
          width: "4px",
          height: "6px",
          opacity: "0",
          transition: "opacity 0.3s ease-in-out",
        },

        /* Show Scrollbar on Hover */
        ".group:hover .custom-scrollbar::-webkit-scrollbar": {
          opacity: "1",
        },

        /* Scrollbar track */
        ".custom-scrollbar::-webkit-scrollbar-track": {
          backgroundColor: "#F6FAFA",
          borderRadius: "10px",
        },

        /* Scrollbar thumb */
        ".custom-scrollbar::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(135, 138, 153, 0.5)",
          borderRadius: "20px",
        },

        /* Scrollbar thumb on hover */
        ".group:hover .custom-scrollbar::-webkit-scrollbar-thumb": {
          backgroundColor: "#878a9980",
        },
      });
    }),
  ],
};
