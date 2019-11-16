import { mount } from "enzyme"
import { Show, Hide } from "./display.item"
import React from "react"

describe("Display components", () => {
  test("<Show>: should render correctly", () => {
    const visible = mount(
      <Show if={true}>
        <h1>i'm visible</h1>
      </Show>
    )

    const hidden = mount(
      <Show if={false}>
        <h1>i'm hidden</h1>
      </Show>
    )

    expect(visible.contains(<h1>i'm visible</h1>)).toBe(true)
    expect(hidden.contains(<h1>i'm hidden</h1>)).toBeFalsy()
  })

  test("<Hide>: should render correctly", () => {
    const hidden = mount(
      <Hide if={true}>
        <h1>i'm hidden</h1>
      </Hide>
    )

    const visible = mount(
      <Hide if={false}>
        <h1>i'm visible</h1>
      </Hide>
    )

    expect(hidden.contains(<h1>i'm hidden</h1>)).toBeFalsy()
    expect(visible.contains(<h1>i'm visible</h1>)).toBe(true)
  })
})
