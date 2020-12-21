import "@testing-library/jest-dom/extend-expect"
import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import React from "react"
import { Truncate } from "./truncate"

describe("<Truncate/> component", () => {
  test("Check default render", () => {
    const { getByTestId } = render(
      <div data-testid="truncate-component">
        <Truncate> Hello world </Truncate>
      </div>
    )

    expect(getByTestId("truncate-component")).toBeInTheDocument()
    expect(getByTestId("truncate-component")).toHaveTextContent("Hello world")
  })

  test("Check {size}", () => {
    const { getByTestId } = render(
      <div>
        <div data-testid="truncate-example1">
          <Truncate size={3}> Hello world! </Truncate>
        </div>

        <div data-testid="truncate-example2">
          <Truncate size={4}> Hello world! </Truncate>
        </div>

        <div data-testid="truncate-example3">
          <Truncate size={5}> Hello world! </Truncate>
        </div>

        <div data-testid="truncate-example4">
          <Truncate size={10}> Lorem ipsum dolor sit amet consectetur adipiscing elit </Truncate>
        </div>
      </div>
    )

    expect(getByTestId("truncate-example1")).toHaveTextContent("Hel...")
    expect(getByTestId("truncate-example2")).toHaveTextContent("Hell...")
    expect(getByTestId("truncate-example3")).toHaveTextContent("Hello...")
    expect(getByTestId("truncate-example4")).toHaveTextContent("Lorem ipsu...")
  })

  test("Check {end}", () => {
    const { getByTestId } = render(
      <div>
        <div data-testid="truncate-example1">
          <Truncate size={3} end="-foo"> Hello world </Truncate>
        </div>

        <div data-testid="truncate-example2">
          <Truncate size={4} end="-bar"> Hello world </Truncate>
        </div>

        <div data-testid="truncate-example3">
          <Truncate size={5} end="-span"> Hello world </Truncate>
        </div>
      </div>
    )

    expect(getByTestId("truncate-example1")).toHaveTextContent("Hel-foo")
    expect(getByTestId("truncate-example2")).toHaveTextContent("Hell-bar")
    expect(getByTestId("truncate-example3")).toHaveTextContent("Hello-span")
  })
})
