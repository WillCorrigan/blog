/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    colors: {
      g1: "#0f2027",
      g2: "#203a43",
      g3: "#2c5364",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
