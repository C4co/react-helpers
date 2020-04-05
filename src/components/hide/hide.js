import React from "react"
import PropTypes from "prop-types"

export function Hide(props) {
  if (props.if) {
    return null
  }

  return <> {props.children} </>
}

Hide.propTypes = {
  /** Condition to show or hide the component. */
  if: PropTypes.bool,

  /** Children content */
  children: PropTypes.any
}

Hide.defaultProps = {
  if: true
}
