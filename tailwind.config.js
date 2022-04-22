module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // keyframes: {
      //   turn360: {
      //     "0%, 100%": { transform: "rotate(-180deg)" },
      //     "50%": { transform: "rotate(180deg)" },
      //   },
      // },
      animation: {
        turn360: "spin 200ms ease-in-out",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
