import React, { Fragment } from "react"

interface EachProps {
  items: Array<any>
  children: Function
}

export function Each(props: EachProps) {
  return (
    <Fragment>
      {props.items.map((item, index, arr) => {
        return (
          <Fragment key={index}>{props.children(item, index, arr)}</Fragment>
        )
      })}
    </Fragment>
  )
}
