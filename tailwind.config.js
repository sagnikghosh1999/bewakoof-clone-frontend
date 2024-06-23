/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeInOpacity: {
          "0%": {
            opacity: ".5",
            scale: "1.01",
          },
          "100%": {
            opacity: "1",
            scale: "1",
          },
        },
      },
      animation: {
        "animate-img": "fadeInOpacity 0.7s ease-in 1",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
