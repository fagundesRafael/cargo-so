/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bodyBackGround: "#f7f8f9",
        headerBackGround: "#24292e",
        templateBlue: "#007fff",
        templateWhite: "#ffffff",
        templateTextGrey: "#989cb4",
        templateTextGreen: "#006837",
        templateTextDeadBlue: "#3a416f",
        templateiconDeadBlue: "#3a416f",
        templateRed: "#ff0000",
      },
    },
  },
  plugins: [],
};
