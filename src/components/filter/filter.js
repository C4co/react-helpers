import React, { Fragment } from "react"
import PropTypes from "prop-types"

export function Filter(props) {
  const filtered = props.items.filter((item, index, arr) =>
    props.if(item, index, arr)
  )

  return (
    <Fragment>
      {filtered.map((item, index, arr) => {
        return (
          <Fragment key={index}>
            {props.children(item, index, arr)}
          </Fragment>
        )
      })}
    </Fragment>
  )
}

Filter.propTypes = {
  /** Array of items */
  items: PropTypes.array,

  /** Filter condition */
  if: PropTypes.func,

  /** children component function(item, index, arr) */
  children: PropTypes.func
}
