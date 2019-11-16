import { render } from "enzyme"
import { LazyImage } from "../.."
import React from "react"

describe("LazyImage component", () => {
  test("<LazyImage>: Should render correctly", () => {

    const component = render(
      <div>
        <LazyImage
          style={{width: "100%"}}
          alt="image"
          loader={"http://lorempixel.com/output/sports-q-c-640-480-6.jpg"}
          source={"http://lorempixel.com/output/city-q-g-640-480-10.jpg"}
        />
      </div>
    )

    expect(component.html()).toContain('img')
    expect(component.html()).toContain('style')
    expect(component.html()).toContain('src')
    expect(component.html()).toMatchSnapshot()
  })
})