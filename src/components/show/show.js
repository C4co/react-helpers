import React, { Fragment } from "react"
import PropTypes from "prop-types"

export function Show(props) {
  if (props.if) {
    return (
      <Fragment>
        {props.children}
      </Fragment>
    )
  }

  return null
}

Show.propTypes = {
  /** Condition to show or hide the component. */
  if: PropTypes.bool,

  /** Children content */
  children: PropTypes.any
}

Show.defaultProps = {
  if: true
}
