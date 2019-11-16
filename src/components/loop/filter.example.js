import React from "react"
import styled from "styled-components"
import { Filter } from "./loop.item"

const Wrapper = styled.section`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`

function Example(){
  return(
    <Wrapper>
      <Filter items={[1, 2, 3]} if={item => item > 1}>
        {(item, index) => (
          <section>
            <h1> Filtered value => {index} - {item} </h1>
          </section>
        )}
      </Filter>
    </Wrapper>
  )
}

export default Example