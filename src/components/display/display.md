## Display

Show or hide a component based in a condition. The component hidden don't is rendered in DOM.

#### Usage
```jsx
  import { Show, Hide } from "react-utl"
```

#### Example:

```jsx
  <Show if={true}>
    <h1> Visible title </h1>
  </Show>

  <Show if={false}>
    <h1> Hidden title </h1>
  </Show>

  <Hide if={true}>
    <h1> Hidden title </h1>
  </Hide>

  <Hide if={false}>
    <h1> Visible title </h1>
  </Hide>
```

#### Properties:

| Name | Type | Default |
| --- | --- | --- |
| @if | boolean | true |
