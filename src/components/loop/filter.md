## Filter

Iteration over multiple itens and filter items based in a condition.

#### Usage
```jsx
  import { Filter } from "react-utl"
```

#### Example:

```jsx
  <Filter items={[1, 2, 3]} if={item => item > 1}>
    {(item, index) => (
      <section>
        <h1> Filtered value => {index} - {item} </h1>
      </section>
    )}
  </Filter>
```

#### Properties:

| Name | Type | Default |
| --- | --- | --- |
| @items | array | [] |
| @children | function(item, index) | - |
| @if | function(item) | - |
