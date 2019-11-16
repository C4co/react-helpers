import React from "react"
import { Show, Hide } from "./display.item"

function Example(){
  return(
    <section>
      <Show if={true}>
        <h1> Visible title </h1>
      </Show>

      <Show if={false}>
        <h1> Hidden title </h1>
      </Show>

      <Hide if={true}>
        <h1> Hidden title </h1>
      </Hide>

      <Hide if={false}>
        <h1> Visible title </h1>
      </Hide>
    </section>
  )
}

export default Example
