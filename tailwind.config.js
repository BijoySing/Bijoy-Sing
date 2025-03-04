/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class", // Enables class-based dark mode
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      
    ],
    theme: {
      extend: {
        fontFamily: {
          montserrat: ["Montserrat", "sans-serif"],
          oswald: ["Oswald", "sans-serif"],
        },
      },
    },
    plugins: [ ],
  };
  