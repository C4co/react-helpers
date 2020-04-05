<p align="center">
  <img alt="react" src="https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png" width="120" />
</p>

<h1 align="center">
  React Helpers
</h1>

[![CircleCI](https://circleci.com/gh/C4co/react-helpers.svg?style=svg)](https://circleci.com/gh/C4co/react-helpers)
[![Coverage Status](https://coveralls.io/repos/github/C4co/react-helpers/badge.svg?branch=master)](https://coveralls.io/github/C4co/react-helpers?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/cc1a28ae15bfa4714289/maintainability)](https://codeclimate.com/github/C4co/one-helpers/maintainability)
![GitHub](https://img.shields.io/github/license/c4co/react-helpers)


Some useful react components.

### Install
```
  $ yarn add cn-react-helpers
```

### Development

> Made with create-react-library

Test
```
  $ yarn test
```

### Components

<details>
  <summary> Show </summary>

  ```js
  import { Show } from "cn-react-helpers"

  function App(){
    return (
      <Show if={true}>
        <h1> hello world! <h1/>
      </Show>
    )
  }
  ```
  ```if``` - *boolean* - considition to show component
</details>


----

<details>
  <summary> Hide </summary>

  ```js
  import { Show } from "cn-react-helpers"

  function App(){
    return (
      <Show if={true}>
        <h1> hello world! <h1/>
      </Show>
    )
  }
  ```
  ```if``` - *boolean* -  considition to hide component
</details>

---

<details>
  <summary> Each </summary>

  ```js
  import { Each } from "cn-react-helpers"

  function App(){
    return (
      <Each items={["first", "second", "third"]}>
        {(item, index) => (
          <h1>
            {index}-{item}
          </h1>
        )}
      </Each>
    )
  }
  ```
  ```items``` - *array* - iterate items

  ```children``` - *function(index, item, arr)* - returns items
</details>

----

<details>
  <summary> Filte </summary>

  ```js
  import { Filter } from "cn-react-helpers"

  function App(){
    return (
      <Filter items={[1, 2, 3]} if={item => item > 1}>
        {(item, index) => (
          <h1>
            {index}-{item}
          </h1>
        )}
      </Filter>
    )
  }
  ```
  ```items``` - *array* - filtable elements

  ```children``` - *function(index, item, arr)* - returns filtered elements
</details>

----

<details>
  <summary> LazyImage </summary>

  ```js
  import { LazyImage } from "cn-react-helpers"

  const image = require("./image.png")
  const loader = require("./loader.png")

  function App(){
    return (
      <LazyImage
        style={{ width: "100%" }}
        alt='image'
        loader={loader}
        source={image}
      />
    )
  }
  ```
  ```loader``` - *image path* - show this image when main image is loading

  ```source``` - *image path* - main image
</details>

----

<details>
  <summary> LazyIframe </summary>

  ```js
  import { LazyIframe } from "cn-react-helpers"

  function App(){
    return (
      <LazyIframe
        style={{
          width: "100%",
          border: "none",
          background: "#1173DF"
        }}
        title='Vídeo promocional'
        source='https://www.youtube.com/embed/OxIDLw0M-m0'
      />
    )
  }
  ```
  ```souce``` - *url* - iframe content
</details>

----

<details>
  <summary> Truncate </summary>

  ```js
  import { Truncate } from "cn-react-helpers"

  function App(){
    return (
      <Truncate size={3} end="...">
        Hello world
      </Truncate>
    )
  }
  ```
  ```size``` - *number* - string length

  ```end``` - *string* - custom end of string
</details>

----

### License

MIT © [C4co](https://github.com/C4co)
