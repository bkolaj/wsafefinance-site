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
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"],
        serif: ["Playfair Display", "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      },
      colors: {
        paper: "#F7F6F2",
        ink: "#1E3646",
        gold: "#B79A66",
        mist: "#EEF1F4",
        line: "#D7DEE4",
        slateText: "#22313B",
        night: "#0B1721",
        midnight: "#102635",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(30, 54, 70, 0.12)",
        lift: "0 14px 40px rgba(30, 54, 70, 0.18)",
      },
    },
  },
  plugins: [],
};
