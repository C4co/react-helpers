import React from "react"
import { mount } from "enzyme"
import { Truncate } from "./truncate"

describe("Truncate component", () => {
  test("<Truncate>: should render correctly", () => {
    const case1 = mount(
      <Truncate size={3}>
        Hello world!
      </Truncate>
    )

    const case2 = mount(
      <Truncate size={3} end='custom end'>
        Hello world
      </Truncate>
    )

    const case3 = mount(
      <Truncate>
        Hello world!
      </Truncate>
    )

    const case4 = mount(
      <Truncate />
    )

    expect(case1.text()).toBe("Hel...")
    expect(case2.text()).toBe("Helcustom end")
    expect(case3.text()).toBe("Hello world!")
    expect(case4.text()).toBeFalsy()
  })
})
