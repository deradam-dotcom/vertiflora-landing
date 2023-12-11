/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        lead: "#b1ffa4",
        text: "#004947",
        section: "#F5F5F5",
        overlay: "rgba(0, 73, 71, 0.30)",
        white: "#fff",
      },
      fontFamily: {
        sharp: ["Sharp", "Helvetica"],
        sharp_bold: ["Sharp-Bold", "Helvetica"],
        tanker: ["Tanker", "Helvetica"],
      },
    },
  },
  plugins: [],
};
