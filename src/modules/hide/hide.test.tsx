import "@testing-library/jest-dom/extend-expect"
import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import React from "react"
import { Hide } from "./hide"

describe("<hide/> component", () => {
  test("Check initial render", () => {
    const { queryByText } = render(<Hide> Hello world! </Hide>)
    expect(queryByText("Hello world!")).not.toBeInTheDocument()
  })

  test("Show children", () => {
    const { getByText } = render(<Hide if={false}> Hello world! </Hide>)
    expect(getByText("Hello world!")).toBeInTheDocument()
  })

  test("Hide chidren", () => {
    const { queryByText } = render(<Hide if> Hello world! </Hide>)
    expect(queryByText("Hello world!")).not.toBeInTheDocument()
  })
})
