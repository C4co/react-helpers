import React from "react"
import styled from "styled-components"
import { Each } from "./loop.item"

const Wrapper = styled.section`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`

function Example(){
  return(
    <Wrapper>
      <Each items={["first", "second", "third"]}>
        {(item, index) => (
          <section>
            <h1> {index} -> {item} </h1>
            <hr/>
          </section>
        )}
      </Each>
    </Wrapper>
  )
}

export default Example