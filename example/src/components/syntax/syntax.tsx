import React from "react"
import styled from "styled-components"
import { Prism } from "react-syntax-highlighter"
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism"

const SyntaxCode = styled(Prism)`
  border-radius: 0px !important;
  margin: 0px !important;
  position: relative;
  font-size: 1.2em !important;
  background-color: #262A3F !important;
  *{
    font-family: 'JetBrains Mono', monospace !important;
  }

  .react-syntax-highlighter-line-number{
    opacity: 0.5;
  }
`

interface SyntaxProps {
  code: String
}

export function Syntax(props: SyntaxProps){
  return (
    <div>
      <SyntaxCode data-testid="syntax-code" showLineNumbers={true} language="jsx" style={okaidia}>
        {props.code.trim()}
      </SyntaxCode>
    </div>
  )
}

