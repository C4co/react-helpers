import { render } from "enzyme"
import { LazyIframe } from "../.."
import React from "react"

describe("LazyIframe", () => {
  test("<LazyIframe> should render correctly", () => {

    const component = render(
      <div>
        <LazyIframe
          style={{
            "width": "100%",
            "border": "none",
            "background": "#1173DF"
          }}
          title="Vídeo promocional"
          source="https://www.youtube.com/embed/OxIDLw0M-m0"
        />
      </div>
    )

    expect(component.html()).toContain("iframe")
    expect(component.html()).toContain("title")
    expect(component.html()).toMatchSnapshot()
  })
})