import "@testing-library/jest-dom/extend-expect"
import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import React from "react"
import { Each } from "./each"

describe("<Each/> component", () => {
  const elements1 = ["primeiro", "segundo", "terceiro"]

  test("Rendering elements: String", () => {
    const { getAllByTestId } = render(
      <Each items={elements1}>
        {(item: String) => <h1 data-testid="each-component"> {item} </h1>}
      </Each>
    )

    getAllByTestId("each-component").forEach((item, index) => {
      expect(item).toBeInTheDocument()
      expect(item).toHaveTextContent(elements1[index])
    })
  })
})
