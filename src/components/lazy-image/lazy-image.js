import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"

export function LazyImage({ loader, style, alt, source, ...props }) {
  const imageRef = useRef(null)

  function isInViewport(elem) {
    const bounding = elem.getBoundingClientRect()

    return (
      bounding.top <= document.documentElement.clientHeight
    )
  }

  function reload() {
    const item = imageRef.current

    function action() {
      if (isInViewport(item)) {
        item.src = source

        window.removeEventListener("scroll", action)
        window.removeEventListener("resize", action)
      }
    }

    window.addEventListener("scroll", action)
    window.addEventListener("resize", action)

    action()
  }

  useEffect(() => {
    reload()
  })

  return (
    <img
      {...props}
      ref={imageRef}
      src={loader}
      style={{
        ...style
      }}
      alt={alt || ""}
    />
  )
}

LazyImage.propTypes = {
  /**  Image url */
  source: PropTypes.string,

  /** Pre-load image */
  loader: PropTypes.string,

  /** Image description */
  alt: PropTypes.string,

  /** CSS style */
  style: PropTypes.object
}

LazyImage.defaultProps = {
  source: "",
  loader: "",
  alt: "",
  style: {}
}
