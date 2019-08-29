import React from "react"

function ID() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

/*
  name: Each
  @items -> array - list of elements
  @children -> function - callback passing all elements of array
*/
const Each = props => {
  return (
    <>
      {props.items.map((item, index, arr) => {
        return (
          <React.Fragment key={ID()}>
            {props.children(item, index, arr)}
          </React.Fragment>
        )
      })}
    </>
  )
}

/*
  name: Filter
  @items -> array - list of elements
  @children -> function - callback passing all elements filtered by condition.
*/
const Filter = props => {
  const filtered = props.items.filter((item, index, arr) =>
    props.if(item, index, arr)
  )

  return (
    <>
      {filtered.map((item, index, arr) => {
        return (
          <React.Fragment key={ID()}>
            {props.children(item, index, arr)}
          </React.Fragment>
        )
      })}
    </>
  )
}

export { Each, Filter }
