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
        paper: "#F6F5F2",
        ink: "#0B1F3B",
        gold: "#B89A5A",
        mist: "#E7E9EE",
        line: "#D4D8E1",
        slateText: "#111827",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(11, 31, 59, 0.10)",
        lift: "0 14px 40px rgba(11, 31, 59, 0.14)",
      },
    },
  },
  plugins: [],
};
