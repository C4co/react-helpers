import React from "react"
import { mount } from "enzyme"
import { LimitText } from "./type.component"

describe("LimitText component", () => {
  test("<LimitText>: should render correctly", () => {
    const case1 = mount(
      <LimitText limit={3}>
        Hello world!
      </LimitText>
    )

    const case2 = mount(
      <LimitText limit={3} end="custom end">
        Hello world
      </LimitText>
    )

    const case3 = mount(
      <LimitText>
        Hello world!
      </LimitText>
    )

    const case4 = mount(
      <LimitText>
      </LimitText>
    )

    expect(case1.text()).toBe("Hel...")
    expect(case2.text()).toBe("Helcustom end")
    expect(case3.text()).toBe("Hello world!")
    expect(case4.text()).toBeFalsy()
  })
})
