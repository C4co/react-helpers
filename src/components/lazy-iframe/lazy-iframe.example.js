import React from "react"
import styled from "styled-components"
import { LazyIframe } from "./lazy-iframe"

const EmbedContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
  max-width: 100%;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
  iframe,
  object,
  embed {
    position: absolute;
    background: #f0f0f0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`

const Wrapper = styled.section`
  max-width: 100%;
  width: 600px;
  margin: 0 auto;
`

function Example(){
  return(
    <Wrapper>
      <EmbedContainer>
        <LazyIframe
          style={{
            width: "100%",
            border: "none",
            background: "#1173DF",
          }}
          title="Vídeo promocional"
          source="https://www.youtube.com/embed/OxIDLw0M-m0"
        />
      </EmbedContainer>

      <EmbedContainer>
        <LazyIframe
          style={{
            width: "100%",
            border: "none",
            background: "#1173DF",
          }}
          title="Vídeo promocional"
          source="https://www.youtube.com/embed/pKYiKbf7sP0"
        />
      </EmbedContainer>

      <EmbedContainer>
        <LazyIframe
          style={{
            width: "100%",
            border: "none",
            background: "#1173DF",
          }}
          title="Vídeo promocional"
          source="https://www.youtube.com/embed/SAX6RMEFVM4"
        />
      </EmbedContainer>
    </Wrapper>
  )
}

export default Example
