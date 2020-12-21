import React, { Fragment } from "react"

interface FilterProps {
  if: Function
  items: Array<any>
  children: Function
}

export function Filter(props: FilterProps) {
  const filtered = props.items.filter((item, index, arr) =>
    props.if(item, index, arr)
  )

  return (
    <Fragment>
      {filtered.map((item, index, arr) => {
        return (
          <Fragment key={index}>{props.children(item, index, arr)}</Fragment>
        )
      })}
    </Fragment>
  )
}
