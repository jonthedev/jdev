import { generateCornerKeyframe, generateXYKeyframe } from "./utils"

const fadeIn = {
  "0%": { opacity: "0" },
  "100%": { opacity: "1" }
}

const moveLeft = generateXYKeyframe("x", 0, -1.6)

const moveRight = generateXYKeyframe("x", 0, 1.6)

const moveUp = generateXYKeyframe("y", 0, -1.6)

const moveDown = generateXYKeyframe("y", 0, 1.6)

const moveUpAndLeft = generateCornerKeyframe(moveUp, moveLeft)

const moveUpAndRight = generateCornerKeyframe(moveUp, moveRight)

const moveDownAndRight = generateCornerKeyframe(moveDown, moveRight)

const moveDownAndLeft = generateCornerKeyframe(moveDown, moveLeft)

export default {
  fadeIn,
  moveLeft,
  moveRight,
  moveUp,
  moveDown,
  moveUpAndLeft,
  moveUpAndRight,
  moveDownAndRight,
  moveDownAndLeft
}
