export const isInViewport = elem => {
  const bounding = elem.getBoundingClientRect()
  const offset = 300

  return (
    bounding.top >= 0 &&
    bounding.bottom - offset <= (window.innerHeight || document.documentElement.clientHeight)
  )
}
