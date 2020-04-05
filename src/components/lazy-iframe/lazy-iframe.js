import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"

export function LazyIframe({ source, title, ...props }) {
  const frame = useRef(null)

  function isInViewport(elem) {
    const bounding = elem.getBoundingClientRect()

    return (
      bounding.top <= document.documentElement.clientHeight
    )
  }

  function reload() {
    const iframe = frame.current

    const action = () => {
      if (isInViewport(iframe)) {
        iframe.src = source

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
    <iframe
      ref={frame}
      {...props}
      title={title}
    />
  )
}

LazyIframe.propTypes = {
  /**
  * Iframe title
  */
  title: PropTypes.string,

  /**
  * Iframe url
  */
  source: PropTypes.string
}

LazyIframe.defaultProps = {
  title: "",
  source: ""
}
