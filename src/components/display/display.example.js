import React from "react"
import { Show, Hide } from "./display.component"
import styled from "styled-components"

const Wrapper = styled.section`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`

function Example(){
  return(
    <Wrapper>
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
    </Wrapper>
  )
}

export default Example
