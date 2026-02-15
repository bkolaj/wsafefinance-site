/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["REM", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"],
        serif: ["Yorkie", "Playfair Display", "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      },
      colors: {
        paper: "#F7F6F2",
        ink: "#1e3448",
        gold: "#bb9e70",
        neutral: "#9d9d9c",
        mist: "#EEF1F4",
        line: "#D7DEE4",
        slateText: "#1e3448",
        night: "#0E1A24",
        midnight: "#102635",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(30, 52, 72, 0.12)",
        lift: "0 14px 40px rgba(30, 52, 72, 0.18)",
      },
    },
  },
  plugins: [],
};
