import { mount } from "enzyme"
import { Filter } from "./filter"
import React from "react"

describe("Filter component", () => {
  test("Filter numbers", () => {
    const filter = mount(
      <Filter items={[1, 2, 3]} if={item => item > 1}>
        {(item, index) => (
          <h1>
            {index}-{item}
          </h1>
        )}
      </Filter>
    )

    expect(filter.contains(<h1>0-2</h1>)).toBe(true)
    expect(filter.contains(<h1>1-3</h1>)).toBe(true)
    expect(filter).toMatchSnapshot()
  })

  test("Filter strings", () => {
    const result = mount(
      <Filter items={["foo", "fizz", "fozz"]} if={item => item.includes("fo")}>
        {item => (
          <h1>{item}</h1>
        )}
      </Filter>
    )

    expect(result.contains(<h1>foo</h1>)).toBe(true)
    expect(result.contains(<h1>fozz</h1>)).toBe(true)
    expect(result).toMatchSnapshot()
  })
})
