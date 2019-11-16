import React from "react"

import DisplayReadme from "../src/components/display/display.md"
import DisplayExample from "../src/components/display/display.example"

import LazyIframeReadme from "../src/components/lazy-iframe/lazy-iframe.md"
import LazyIframeExample from "../src/components/lazy-iframe/lazy-iframe.example"

import LazyImageReadme from "../src/components/lazy-image/lazy-image.md"
import LazyImageExample from "../src/components/lazy-image/lazy-image.example"

import EachReadme from "../src/components/loop/each.md"
import EachExample from "../src/components/loop/each.example"

import FilterReadme from "../src/components/loop/filter.md"
import FilterExample from "../src/components/loop/filter.example"

export default {
  title: 'Components',
}

// Display
export const Display = () => (
  <DisplayExample />
)

Display.story = {
  parameters: {readme: {sidebar: DisplayReadme}}
}

// Lazy Iframe
export const LazyIframe = () => (
  <LazyIframeExample />
)

LazyIframe.story = {
  parameters: {readme: {sidebar: LazyIframeReadme}}
}

// Lazy Image
export const LazyImage = () => (
  <LazyImageExample />
)

LazyImage.story = {
  parameters: {readme: {sidebar: LazyImageReadme}}
}

// Loop / Each
export const Each = () => (
  <EachExample />
)

Each.story = {
  parameters: {readme: {sidebar: EachReadme}}
}

// Loop / Filter
export const Filter = () => (
  <FilterExample />
)

Filter.story = {
  parameters: {readme: {sidebar: FilterReadme}}
}
