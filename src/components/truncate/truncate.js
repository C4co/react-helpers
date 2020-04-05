import React, { Fragment } from "react"
import PropTypes from "prop-types"

export function Truncate({ children, size, end }) {
  let result = children

  if (children && children.length > size) {
    result = `${children.substring(0, size)}${end}`
  }

  return (
    <Fragment>
      {result}
    </Fragment>
  )
}

Truncate.propTypes = {
  /** String content */
  children: PropTypes.string,

  /** String length */
  size: PropTypes.number,

  /** end of string */
  end: PropTypes.string
}

Truncate.defaultProps = {
  children: "",
  size: 256,
  end: "..."
}
