## Each

Iteration over multiple itens.

#### Usage
```jsx
  import { Each } from "react-utl"
```

#### Example:

```jsx
  <Each items={["first", "second", "third"]}>
    {(item, index) => (
      <section>
        <h1> {index} -> {item} </h1>
        <hr/>
      </section>
    )}
  </Each>
```

#### Properties:

| Name | Type | Default |
| --- | --- | --- |
| @items | array | - |
| @children | function(item, index) | - |
