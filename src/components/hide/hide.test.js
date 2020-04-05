import { Hide } from "./hide"
import { mount } from "enzyme"
import React from "react"

describe("<Hide> component", () => {
  test("Check hidden", () => {
    const hidden = mount(
      <Hide if>
        <h1>i am hidden</h1>
      </Hide>
    )

    expect(hidden.contains(<h1>i am hidden</h1>)).toBeFalsy()
    expect(hidden).toMatchSnapshot()
  })

  test("Check visibility", () => {
    const visible = mount(
      <Hide if={false}>
        <h1>i am visible</h1>
      </Hide>
    )

    expect(visible.contains(<h1>i am visible</h1>)).toBeTruthy()
    expect(visible).toMatchSnapshot()
  })
})
