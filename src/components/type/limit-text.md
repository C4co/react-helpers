## Limit Text

Limit string text string by length.

#### Usage
```jsx
  import { LimitText } from "cn-react-helpers"
```

#### Example:

```jsx
  <LimitText limit={10} end="." >
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, odit cum facere illum architecto sapiente.
  </LimitText>
```

#### Properties:

| Name | Type | Default |
| --- | --- | --- |
| @children | string | "" |
| @limit | integer | 256 |
| @end | string | ... |
