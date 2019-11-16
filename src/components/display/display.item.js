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

function Hide(props){
  if (props.if) {
    return null
  }

  return <> {props.children} </>
}

export { Show, Hide }
