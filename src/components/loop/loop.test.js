import { mount } from "enzyme"
import { Each, Filter } from "./loop.item"
import React from "react"

describe("Loop component", () => {
  test("<Each>: should iterate over each array item.", () => {

    const each = mount(
      <Each items={['first', 'second', 'third']}>
        {(item, index) => (
          <h1>
            {index}->{item}
          </h1>
        )}
      </Each>
    )

    expect(each.contains(<h1>0->first</h1>)).toBe(true)
    expect(each.contains(<h1>1->second</h1>)).toBe(true)
    expect(each.contains(<h1>2->third</h1>)).toBe(true)
    expect(each).toMatchSnapshot()
  })

  test("<Filter>: Should iterate and filter an array based in a condition", () => {
    const filter = mount(
      <Filter items={[1, 2, 3]} if={item => item > 1}>
        {(item, index) => (
          <h1>
            {index}->{item}
          </h1>
        )}
      </Filter>
    )

    expect(filter.contains(<h1>0->2</h1>)).toBe(true)
    expect(filter.contains(<h1>1->3</h1>)).toBe(true)
  })
})
