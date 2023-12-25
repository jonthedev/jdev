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

const moveUp = {
  "0%": { transform: "translateY(0%)" },
  "100%": { transform: "translateY(-1.6rem)" }
}

const moveUpAndLeft = {
  "0%": mergeCssValues("transform", moveUp["0%"], moveLeft["0%"]),
  "100%": mergeCssValues(
    "transform",
    moveUp["100%"],
    moveLeft["100%"]
  )
}

export default {
  fadeIn,
  moveLeft,
  moveUp,
  moveUpAndLeft
}
