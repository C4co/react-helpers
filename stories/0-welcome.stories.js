import React from "react"
import WelcomeReadme from "../src/welcome.md"
import styled from "styled-components"

const Wrapper = styled.section`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
`

const Title = styled.h1`
  font-size: 1.7em;
  color: #2F2F2F;
  margin: 0 0 20px 0;
  text-align: center;
`

const Description = styled.p`
  font-size: 1em;
  color: #2F2F2F;
  text-align: center;
  margin: 0 0 20px 0;
`

const Install = styled.div`
  background: #000000;
  padding: 10px;
  font-family: monospace;
  text-align: center;
  font-weight: bold;
  font-size: 1.1em;
  width: 100%;
  color: #ffffff;
  border-radius: 200px;
  max-width: 340px;
  margin: 0 auto;
`

export default {
  title: 'Welcome',
}

export const welcome = () => (
  <Wrapper>
    <Title> React Helpers </Title>
    <Description>
      Some useful react components
    </Description>
    <Install>
      yarn add cn-react-helpers
    </Install>
  </Wrapper>
)

welcome.story = {
  parameters: {
    readme: {
      sidebar: WelcomeReadme
    }
  }
}
