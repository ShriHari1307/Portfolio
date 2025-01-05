// tailwind.config.js

import scrollbarPlugin from 'tailwind-scrollbar';
import flowbitePlugin from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/flowbite-react/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        Michroma: ['"Michroma"', 'sans-serif'], // Custom font for the text
      },
      animation: {
        typing: "typing 3s steps(30, end), blink 0.5s step-end infinite",
        preloadtyping: "typing 1s steps(30, end), blink 0.5s step-end infinite",
        'letterAnimation': 'letterAnimation 0.8s ease-out forwards', // Letter animation
        'letterBounce': 'letterBounce 0.8s ease-in-out infinite', // Bounce effect for letters
        'slide-in': 'slide-in 0.5s ease-out forwards', // Slide-in animation
        fadeIn: 'fadeIn 2s ease-in-out', // Fade-in animation
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
        letterAnimation: { // Animation for letter stroke and fade-in
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        letterBounce: { // Bounce effect on letter
          '0%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
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
    flowbitePlugin,
    scrollbarPlugin,
  ],
};
