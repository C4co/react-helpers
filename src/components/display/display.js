import React from "react"

/*
  name: Show
  @if -> boolean - condition to show or not the component.
*/
const Show = props => {
  if (props.if) {
    return <> {props.children} </>
  }

  return null
}

/*
  name: Hide
  @if -> boolean - condition to hide or not the component.
*/
const Hide = props => {
  if (props.if) {
    return null
  }

  return <> {props.children} </>
}

export { Show, Hide }
