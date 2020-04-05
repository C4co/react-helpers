import { mount } from "enzyme"
import { Each } from "./each"
import React from "react"

describe("Each component", () => {
  test("should iterate over each array item.", () => {
    const each = mount(
      <Each items={["first", "second", "third"]}>
        {(item, index) => (
          <h1>
            {index}-{item}
          </h1>
        )}
      </Each>
    )

    expect(each.contains(<h1>0-first</h1>)).toBe(true)
    expect(each.contains(<h1>1-second</h1>)).toBe(true)
    expect(each.contains(<h1>2-third</h1>)).toBe(true)
    expect(each).toMatchSnapshot()
  })
})
