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
import GithubImage from "./github.svg"

const Logo = styled.img`
  width: 60px;
  display: block;
  margin: 25px auto 25px auto;
`

const Header = styled.div`
  margin-bottom: 50px;
`

const Github = styled.a`
  display: block;
  max-width: 280px;
  margin: 0 auto 50px auto;

  @media(max-width: 800px){
    max-width: 230px;
  }
`

const GithubLogo = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto;
`

const Element = styled.div`
  margin-bottom: 50px;
`

const Install = styled.div`
  margin-bottom: 50px;
  padding: 20px;
  background-color: #262a3f;
  text-align: center;
  font-size: 1.5em;
  color: #00ffff;

  @media(max-width: 800px){
    font-size: 1em;
  }
`

const Credits = styled.div`
  margin-bottom: 30px;
`

export default function App(){
  return (
    <Base>
      <Center>
        <Logo src={LogoImage} />

        <Header>
          <MainTitle> React Helpers </MainTitle>
          <br/>
          <Text> Some useful react components </Text>
        </Header>

        <Github target="_blank" href="https://github.com/C4co/cn-react-helpers">
          <GithubLogo src={GithubImage} />
        </Github>

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

        <Credits>
          <Text> Designed and coded by Carlos Costa </Text>
        </Credits>
      </Center>
    </Base>
  )
}
