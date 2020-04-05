import React, { Fragment } from "react"
import PropTypes from "prop-types"

export function Each({ items, children }) {
  return (
    <Fragment>
      {items.map((item, index, arr) => {
        return (
          <Fragment key={index}>
            {children(item, index, arr)}
          </Fragment>
        )
      })}
    </Fragment>
  )
}

Each.propTypes = {
  /** Array of items */
  items: PropTypes.array,

  /** children component function(item, index, arr) */
  children: PropTypes.func
}
