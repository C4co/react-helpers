import React from "react"

/*
  name: Show
  @if -> boolean - condition to show or not the component.
*/
function Show(props){
  if (props.if) {
    return <> {props.children} </>
  }

  return null
}

Show.defaultProps = {
  if: true
}

/*
  name: Hide
  @if -> boolean - condition to hide or not the component.
*/
function Hide(props){
  if (props.if) {
    return null
  }

  return <> {props.children} </>
}

Hide.defaultProps = {
  if: true
}

export { Show, Hide }
