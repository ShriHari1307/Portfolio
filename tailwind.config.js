// tailwind.config.js

import scrollbarPlugin from 'tailwind-scrollbar';

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
        preloadtyping:"typing 1s steps(30, end), blink 0.5s step-end infinite",
        'slide-in': 'slide-in 0.5s ease-out forwards', // Slide-in animation
        fadeIn: 'fadeIn 2s ease-in-out', // Add fadeIn animation
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
        'slide-in': {  // Slide-in animation
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        fadeIn: {  // Fade-in animation
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [
    scrollbarPlugin,
  ],
};
