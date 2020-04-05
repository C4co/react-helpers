import { mount } from "enzyme"
import { LazyIframe } from "./lazy-iframe"
import React from "react"

describe("LazyIframe", () => {
  test("<LazyIframe> should render correctly", () => {
    const component = mount(
      <LazyIframe
        style={{
          width: "100%",
          border: "none",
          background: "#1173DF"
        }}
        title='Vídeo promocional'
        source='https://www.youtube.com/embed/OxIDLw0M-m0'
      />
    )

    expect(component.props().src).toBeFalsy()
    expect(component).toMatchSnapshot()

    expect(true).toBe(true)
  })
})
