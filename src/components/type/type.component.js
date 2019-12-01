import React from "react"
import PropTypes from "prop-types"

function LimitText({children, limit, end}){
  let result = children

  if(children && children.length > limit){
    result = `${children.substring(0, limit)}${end}`
  }

  return(
    <>
      {result}
    </>
  )
}

LimitText.propTypes = {
  children: PropTypes.string,
  limit: PropTypes.number,
  end: PropTypes.string
}

LimitText.defaultProps = {
  limit: 256,
  end: "..."
}

export {
  LimitText
}
