/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        g1: "#0f2027",
        g2: "#203a43",
        g3: "#2c5364",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
