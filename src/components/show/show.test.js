import React from "react"
import { mount } from "enzyme"
import { Show } from "./show"

describe("Show component", () => {
  test("Check visibility", () => {
    const visible1 = mount(
      <Show if>
        <h1>i am visible</h1>
      </Show>
    )

    // undefined don't set default {if} propertie.
    const visible2 = mount(
      <Show if={undefined}>
        <h1>i am visible</h1>
      </Show>
    )

    expect(visible1.contains(<h1>i am visible</h1>)).toBe(true)
    expect(visible1).toMatchSnapshot()

    expect(visible2.contains(<h1>i am visible</h1>)).toBe(true)
    expect(visible2).toMatchSnapshot()
  })

  test("Check hidden", () => {
    const hidden1 = mount(
      <Show if={false}>
        <h1>i am hidden</h1>
      </Show>
    )

    const hidden2 = mount(
      <Show if={null}>
        <h1>i am hidden</h1>
      </Show>
    )

    expect(hidden1.contains(<h1>i am hidden</h1>)).toBe(false)
    expect(hidden1).toMatchSnapshot()

    expect(hidden2.contains(<h1>i am hidden</h1>)).toBe(false)
    expect(hidden2).toMatchSnapshot()
  })
})
