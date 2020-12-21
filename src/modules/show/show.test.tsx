import "@testing-library/jest-dom/extend-expect"
import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import React from "react"
import { Show } from "./show"

describe("<Show/> component ", () => {
  test("Check default render", () => {
    const { getByText } = render(<Show> Hello world! </Show>)
    expect(getByText("Hello world!")).toBeInTheDocument()
  })

  test("Show children", () => {
    const { getByText } = render(<Show if> Hello world! </Show>)
    expect(getByText("Hello world!")).toBeInTheDocument()
  })

  test("Show children", () => {
    const { queryByText } = render(<Show if={false}> Hello world! </Show>)
    expect(queryByText("Hello world!")).not.toBeInTheDocument()
  })
})
