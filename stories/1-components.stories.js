import React from "react"
import displayNotes from "../src/components/display/doc-display.md"

export default {
  title: 'Components',
}

export const display = () => (
  <h1> Display component foo </h1>
)

display.story = { parameters: { notes: displayNotes }}
