import { addDecorator, configure } from "@storybook/react"
import { addReadme } from 'storybook-readme'

// Decorators
addDecorator(addReadme)

// automatically import all files ending in *.stories.js
configure(require.context("../stories", true, /\.stories\.js$/), module)
