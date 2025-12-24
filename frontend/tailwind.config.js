/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3b76ad",
          dark: "#2c5a85",
        },
        secondary: "#151e2b",
        accent: "#0f3c66",
        "background-light": "#f8f9fa",
      },
    },
  },
  plugins: [],
};
