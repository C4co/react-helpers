import { mount } from "enzyme"
import { LazyImage } from "./lazy-image"
import React from "react"

const image = require("./image.png")
const loader = require("./loader.png")

describe("LazyImage component", () => {
  test("Check loader image", () => {
    const imgComponent = mount(
      <LazyImage
        style={{ width: "100%" }}
        alt='image'
        loader={loader}
        source={image}
      />
    )

    expect(imgComponent.find("img").prop("src")).toBe("loader.png")
    expect(imgComponent).toMatchSnapshot()
  })
})
