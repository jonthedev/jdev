import { generateAnimationString } from "./utils"

const fadeInDefault = generateAnimationString("fadeIn")
const fadeInSlow = generateAnimationString("fadeIn", "3s")

const moveLeftDefault = generateAnimationString("moveLeft")
const moveLeftSlow = generateAnimationString("moveLeft", "3s")

const moveUpDefault = generateAnimationString("moveUp")
const moveUpSlow = generateAnimationString("moveUp", "3s")

const moveDownDefault = generateAnimationString("moveDown")
const moveDownSlow = generateAnimationString("moveDown", "3s")

const moveRightDefault = generateAnimationString("moveRight")
const moveRightSlow = generateAnimationString("moveRight", "3s")

const moveUpAndLeftDefault = generateAnimationString("moveUpAndLeft")

const moveUpAndRightDefault =
  generateAnimationString("moveUpAndRight")

const moveDownAndRightDefault = generateAnimationString(
  "moveDownAndRight"
)

const moveDownAndLeftDefault =
  generateAnimationString("moveDownAndLeft")

export default {
  fadeInDefault,
  fadeInSlow,
  moveLeftDefault,
  moveLeftSlow,
  moveRightDefault,
  moveRightSlow,
  moveUpDefault,
  moveUpSlow,
  moveDownDefault,
  moveDownSlow,
  moveUpAndLeftDefault,
  moveUpAndRightDefault,
  moveDownAndRightDefault,
  moveDownAndLeftDefault
}
