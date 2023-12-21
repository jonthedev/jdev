import {
  moveUp,
  moveLeft,
  fadeIn
} from "./theme/animations/keyframes"

import {
  fadeInDefault,
  moveLeftDefault,
  moveLeftSlow,
  moveUpDefault
} from "./theme/animations/animations"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"]
      },
      animation: {
        fadeInDefault,
        moveLeftDefault,
        moveLeftSlow,
        moveUpDefault
      },
      keyframes: {
        fadeIn,
        moveLeft,
        moveUp
      }
    }
  },
  plugins: []
}
