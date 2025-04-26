/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        geist: ['"Geist Sans"', "sans-serif"], // Custom font
      },
    },
  },
  plugins: [],
};
