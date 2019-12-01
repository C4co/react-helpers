import React from "react"
import { LimitText } from "./type.component"
import styled from "styled-components"

const Wrapper = styled.section`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`

function LimitTextExample(){
  return(
    <Wrapper>
      <h3>
        <LimitText limit={10} end="." >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, odit cum facere illum architecto sapiente.
        </LimitText>
      </h3>

      <h3>
        <LimitText limit={20}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, odit cum facere illum architecto sapiente.
        </LimitText>
      </h3>

      <h3>
        <LimitText limit={30} end="... To be continue.">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, odit cum facere illum architecto sapiente.
        </LimitText>
      </h3>
    </Wrapper>
  )
}

export {
  LimitTextExample
}
