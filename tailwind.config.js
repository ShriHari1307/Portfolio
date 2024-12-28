// tailwind.config.js
import scrollbarPlugin from 'tailwind-scrollbar'; // Import the plugin using ES Module syntax

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        typing: "typing 3s steps(30, end), blink 0.5s step-end infinite",
      },
      keyframes: {
        typing: {
          "from": { width: "0" },
          "to": { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
          "100%": { borderColor: "#3498db" },
        },
      },
    },
  },
  plugins: [
    scrollbarPlugin, // Use the imported plugin here
  ],
};
