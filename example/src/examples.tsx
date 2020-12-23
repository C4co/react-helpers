export const ShowExample: string = `
import { Show } from "cn-react-helpers"
const foo: number = 10
const bar: number = 5

...

// default
{ foo > bar && <h1> valid condition </h1> }

// show component
<Show if={foo > bar}>
  <h1> valid condition </h1>
</Show>
`

export const HideExample: string = `
import { Hide } from "cn-react-helpers"
const foo: number = 10
const bar: number = 5

...

// default
{ foo > bar && <h1> valid condition </h1> }

// Hide component
<Hide if={foo > bar}>
  <h1> valid condition </h1>
</Hide>
`

export const EachExample: string = `
import { Each } from "cn-react-helpers"
const elements = [1, 2, 3, 4, 5]

...

// default
{elements.each((item: number) => (
  <h1> {item} </h1>
))}

// Each component
<Each items=[elements]>
  {(item: number) => (
    <h1> {item} </h1>
  )}
</Each>
`

export const FilterExample: string = `
import { Filter } from "cn-react-helpers"
const elements = [1, 2, 3, 4, 5]

...

// default
{elements.filter(item: number) => {
  if(item > 5){
    return (
      <h1> {item} </h1>
    )
  }
}}

// Filter component
<Filter items=[elements] if={(item: number) => item > 5}>
  {(item: number) => (
    <h1> {item} </h1>
  )}
</Filter>
`

export const TruncateExample: string = `
import { Truncate } from "cn-react-helpers"

...

<Truncate size="3" end="...">
  Hello world!
</Truncate>
`
