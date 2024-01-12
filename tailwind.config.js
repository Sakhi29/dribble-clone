/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customFont: ["Helvetica", "Arial", "sans-serif"],
        font2: ["Source Serif 4", "Georgia", "serif"],
      },
      animation: {
        "pulse-reduce":
          "pulse-reduce 32s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        "pulse-reduce": {
          "0%": { backgroundColor: "#ffda79", opacity: "1" },
          "25%": { backgroundColor: "#ffabe7", opacity: "1" },
          "50%": { backgroundColor: "#d2bcf3", opacity: "1" },
          "75%": { backgroundColor: "#edf3d8", opacity: "1" },
          "100%": { backgroundColor: "#ffda79", opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
