import "@testing-library/jest-dom/extend-expect"
import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import React from "react"
import { Filter } from "./filter"

const elements1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const elements2: string[] = ["apple", "orange", "grape", "coconut", "cocoa"]

describe("<Filter/> component", () => {
  test("Filtering elements: number", () => {
    const { getAllByTestId } = render(
      <Filter items={elements1} if={(item: Number) => item > 5}>
        {(item: Number) => <h1 data-testid="filter-component"> {item} </h1>}
      </Filter>
    )

    const filteredItems = elements1.filter((item) => item > 5)

    getAllByTestId("filter-component").forEach((item, index) => {
      expect(item).toBeInTheDocument()
      expect(item).toHaveTextContent(filteredItems[index].toString())
    })
  })

  test("Filtering elements: string", () => {
    const { getAllByTestId } = render(
      <Filter
        items={elements2}
        if={(item: String) => item === "apple" || item === "cocoa"}
      >
        {(item: String) => <h1 data-testid="filter-component"> {item} </h1>}
      </Filter>
    )

    const filteredItems = elements2.filter(
      (item) => item === "apple" || item === "cocoa"
    )

    getAllByTestId("filter-component").forEach((item, index) => {
      expect(item).toBeInTheDocument()
      expect(item).toHaveTextContent(filteredItems[index])
    })
  })
})
