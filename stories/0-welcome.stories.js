import React from "react"
import WelcomeReadme from "../src/welcome.md"

export default {
  title: 'Welcome',
}

export const welcome = () => (
  <h1> Welcome </h1>
)

welcome.story = {
  parameters: {
    readme: {
      sidebar: WelcomeReadme
    }
  }
}
