export const mergeCssValues = (
  cssPropertyName,
  property1,
  property2
) => ({
  [cssPropertyName]: `${property1[cssPropertyName]} ${property2[cssPropertyName]}`
})

export const generateAnimationString = (
  name,
  duration = "1s",
  timing = "ease",
  iterationCount = "infinite",
  direction = "alternate"
) => `${name} ${duration} ${timing} ${iterationCount} ${direction}`

export const generateXYKeyframe = (
  axis,
  startDistance,
  endDistance
) => {
  const animationObject = {
    "0%": {
      transform: `translate${axis.toUpperCase()}(${startDistance}%)`
    },
    "100%": {
      transform: `translate${axis.toUpperCase()}(${endDistance}rem)`
    }
  }

  return animationObject
}

export const generateCornerKeyframe = (axisX, axisY) => ({
  "0%": mergeCssValues("transform", axisX["0%"], axisY["0%"]),
  "100%": mergeCssValues("transform", axisX["100%"], axisY["100%"])
})
