## Lazy Image

Just load a image when it appear in view port.

#### Usage
```jsx
  import { LazyImage } from "@cn/react-helpers"
```

#### Example:

```jsx
  <LazyImage
    style={{width: "100%"}}
    alt="image"
    loader={require("../images/loader.svg")}
    source={require("../images/image.jpg")}
  />
```

#### Properties:

| Name | Type | Default |
| --- | --- | --- |
| @loader | string(image path) | - |
| @source | string(image path) | - |
