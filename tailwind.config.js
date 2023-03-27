/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        banner: "#CCDBF0",
        body: "#A1A1A1",
        bgColor: "#004DB3",
        navlink: "#AAC4E6",
        qualityBg: "#F8F9FC",
        weight: 600,
        faq: "#000F24",
        footer: "#000F24",
      },
    },
  },
  plugins: [],
};
