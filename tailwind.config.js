const aceternityUI = require("aceternity-ui/tailwind-plugin").default;

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    aceternityUI(), // Tambahkan plugin Aceternity UI jika ada
  ],
};
