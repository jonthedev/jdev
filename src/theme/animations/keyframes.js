import { mergeCssValues } from "./utils"

const fadeIn = {
  "0%": { opacity: "0" },
  "100%": { opacity: "1" }
}

const moveLeft = {
  "0%": { transform: "translateX(0%)" },
  "100%": {
    transform: "translateX(-1.6rem)"
  }
}

const moveRight = {
  "0%": { transform: "translateX(0%)" },
  "100%": {
    transform: "translateX(1.6rem)"
  }
}

const moveUp = {
  "0%": { transform: "translateY(0%)" },
  "100%": { transform: "translateY(-1.6rem)" }
}

const moveDown = {
  "0%": { transform: "translateY(0%)" },
  "100%": { transform: "translateY(1.6rem)" }
}

const moveUpAndLeft = {
  "0%": mergeCssValues("transform", moveUp["0%"], moveLeft["0%"]),
  "100%": mergeCssValues(
    "transform",
    moveUp["100%"],
    moveLeft["100%"]
  )
}

const moveUpAndRight = {
  "0%": mergeCssValues("transform", moveUp["0%"], moveRight["0%"]),
  "100%": mergeCssValues(
    "transform",
    moveUp["100%"],
    moveRight["100%"]
  )
}

const moveDownAndRight = {
  "0%": mergeCssValues("transform", moveDown["0%"], moveRight["0%"]),
  "100%": mergeCssValues(
    "transform",
    moveDown["100%"],
    moveRight["100%"]
  )
}

const moveDownAndLeft = {
  "0%": mergeCssValues("transform", moveDown["0%"], moveLeft["0%"]),
  "100%": mergeCssValues(
    "transform",
    moveDown["100%"],
    moveLeft["100%"]
  )
}

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
