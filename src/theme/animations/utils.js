export const mergeCssValues = (
  cssPropertyName,
  property1,
  property2
) => {
  return {
    [cssPropertyName]: `${property1[cssPropertyName]} ${property2[cssPropertyName]}`
  }
}
