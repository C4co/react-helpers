import React, { Fragment } from "react"

interface TruncateProps {
  size: Number
  end: String
  children: String
}

export function Truncate(props: TruncateProps) {
  const { children, size, end } = props
  const content = children.trim()
  let result = content

  if (content && content.length > size) {
    result = `${content.substring(0, Number(size))}${end}`
  }

  return <Fragment>{result}</Fragment>
}

Truncate.defaultProps = {
  children: "",
  size: 256,
  end: "..."
}
