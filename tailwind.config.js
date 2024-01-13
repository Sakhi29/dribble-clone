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
        marquee: "marquee 32s linear infinite",
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
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(calc(-50% - 16px), 0, 0)" },
        },
      },
      backgroundImage: {
        "profile-card": "url('../src/assets/image.jpg')",
        "profile-card2": "url('../src/assets/image2.jpg')",
        "profile-card3": "url('../src/assets/image3.jpg')",
        "profile-card4": "url('../src/assets/image4.jpg')",
        "profile-card5": "url('../src/assets/image5.jpg')",
        "profile-card6": "url('../src/assets/image6.jpg')",
        "profile-card7": "url('../src/assets/image7.jpg')",
        "profile-card8": "url('../src/assets/image8.jpg')",
        "profile-card9": "url('../src/assets/image9.jpg')",
        "profile-card10": "url('../src/assets/image10.jpg')",

      },
    },
  },
  plugins: [],
};
