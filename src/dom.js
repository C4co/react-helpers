export const isInViewport = elem => {
  var bounding = elem.getBoundingClientRect()
  const offset = 200

  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom - offset <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  )
}
