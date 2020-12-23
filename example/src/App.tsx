import React from "react"
import styled from "styled-components"
import {
  Base,
  Center,
  Syntax,
  MainTitle,
  Title,
  Text
} from "./components"
import {
  ShowExample,
  HideExample,
  EachExample,
  FilterExample,
  TruncateExample
} from "./examples"

import LogoImage from "./logo.svg"

const Header = styled.div`
  margin-top: 50px;
  margin-bottom: 80px;
`

const Element = styled.div`
  margin-bottom: 50px;
`

const Logo = styled.img`
  width: 70px;
  display: block;
  margin: 50px auto 0 auto;
`

const Install = styled.div`
  margin-bottom: 80px;
  padding: 20px;
  font-size: 1.3em;
  background-color: #262a3f;
  color: #00ffff;
  text-align: center;
`

export default function App(){
  return (
    <Base>
      <Center>

        <Logo src={LogoImage} />

        <Header>
          <MainTitle> CN REACT HELPERS </MainTitle>
          <br/>
          <Text> Some useful react components </Text>
        </Header>

        <Install>
          npm install cn-react-helpers
        </Install>

        <Element>
          <Title> {`<Show />`} </Title>
          <br/>
          <Syntax code={ShowExample} />
        </Element>

        <Element>
          <Title> {`<Hide />`} </Title>
          <br/>
          <Syntax code={HideExample} />
        </Element>

        <Element>
          <Title> {`<Each />`} </Title>
          <br/>
          <Syntax code={EachExample} />
        </Element>

        <Element>
          <Title> {`<Filter />`} </Title>
          <br/>
          <Syntax code={FilterExample} />
        </Element>

        <Element>
          <Title> {`<Truncate />`} </Title>
          <br/>
          <Syntax code={TruncateExample} />
        </Element>
      </Center>
    </Base>
  )
}
