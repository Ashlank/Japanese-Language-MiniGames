/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "background": {
          50: "#CAF0F0",
          100: "#BBECEC",
          200: "#A0E4E4",
          300: "#84DCDC",
          400: "#60D2D2",
          500: "#38C7C7",
          600: "#33B3B3",
          700: "#2D9F9F",
          800: "#268787",
          900: "#1E6B6B",
          950: "#195757"
        }
      },
      "boxShadow": {
        "cardShadow": "2px 7px 5px 5px rgba(38, 135, 135, .35)",
        "memoryCardShadow": "2px 3px 2px 2px rgba(38, 135, 135, .35)"
      },
      "keyframes": {
        "correct": {
          "0%": { transform: "translateX(0px)", borderColor: "green" },
          "25%": { transform: "translateX(3px)", borderColor: "green" },
          "50%": { transform: "translateX(0px)", borderColor: "green" },
          "75%": { transform: "translateX(3px)", borderColor: "green" },
          "100%": { transform: "translateX(0px)", borderColor: "#38C7C7"}
        },
        "wrong": {
          "0%": { transform: "translateX(0px)", borderColor: "red" },
          "25%": { transform: "translateX(3px)", borderColor: "red" },
          "50%": { transform: "translateX(0px)", borderColor: "red" },
          "75%": { transform: "translateX(3px)", borderColor: "red" },
          "100%": { transform: "translateX(0px)", borderColor: "#38C7C7"}
        }
      },
      "animation": {
        correct: "correct .3s linear 1",
        wrong: "wrong .3s linear 1",
      }
    },
  },
  plugins: [],
}