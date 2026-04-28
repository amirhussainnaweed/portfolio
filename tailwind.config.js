/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ← THIS is the critical fix
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
