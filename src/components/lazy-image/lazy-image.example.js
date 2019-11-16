import React from "react"
import {LazyImage} from "./lazy-image"
import styled from "styled-components"

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 500px;
  width: 100%;
`

function Example(){
  return(
  <Wrapper>
    <LazyImage
      style={{ width: "100%" }}
      alt="image"
      loader={require("./loader.svg")}
      source="https://cdn.pixabay.com/photo/2019/07/21/03/42/blue-4351901_960_720.jpg"
    />

    <LazyImage
      style={{ width: "100%" }}
      alt="image"
      loader={require("./loader.svg")}
      source="https://cdn.pixabay.com/photo/2013/12/17/20/10/air-bubbles-230014_960_720.jpg"
    />

    <LazyImage
      style={{ width: "100%" }}
      alt="image"
      loader={require("./loader.svg")}
      source="https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg"
    />

    <LazyImage
      style={{ width: "100%" }}
      alt="image"
      loader={require("./loader.svg")}
      source="https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_960_720.jpg"
    />

    <LazyImage
      style={{ width: "100%" }}
      alt="image"
      loader={require("./loader.svg")}
      source="https://cdn.pixabay.com/photo/2014/08/15/11/29/sea-418742_960_720.jpg"
    />

    <LazyImage
      style={{ width: "100%" }}
      alt="image"
      loader={require("./loader.svg")}
      source="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_960_720.jpg"
    />
  </Wrapper>
  )
}

export default Example

