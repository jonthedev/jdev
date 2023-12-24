/** @type {import('tailwindcss').Config} */

import animationsData from "./src/theme/animations/index.js"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"]
      },
      animation: animationsData.animations,
      keyframes: animationsData.keyframes
    }
  },
  plugins: []
}
