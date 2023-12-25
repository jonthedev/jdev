export const mergeCssValues = (
  cssPropertyName,
  property1,
  property2
) => {
  return {
    [cssPropertyName]: `${property1[cssPropertyName]} ${property2[cssPropertyName]}`
  }
}

export const generateAnimationString = (
  name,
  duration = "1s",
  timing = "ease",
  iterationCount = "infinite",
  direction = "alternate"
) => {
  return `${name} ${duration} ${timing} ${iterationCount} ${direction}`
}
