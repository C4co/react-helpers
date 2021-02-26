<p align="center">
  <img alt="react" src="https://i.imgur.com/DrE0cgt.png" width="100" />
</p>

<h1 align="center">
  CN React Helpers
</h1>

[![Maintainability](https://api.codeclimate.com/v1/badges/35fba2716be7a4167258/maintainability)](https://codeclimate.com/github/C4co/cn-react-helpers/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/C4co/cn-react-helpers/badge.svg?branch=master&service=github)](https://coveralls.io/github/C4co/cn-react-helpers?branch=master)
[![Build Status](https://www.travis-ci.com/C4co/cn-react-helpers.svg?branch=master)](https://www.travis-ci.com/C4co/cn-react-helpers)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

Some useful react utilities.

### Install
```
  $ npm install cn-react-helpers
```

### Development

> Made with create-react-library

Test
```
  $ npm test
```

Build
```
  $ npm run build
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
  ```if``` - *boolean* - condition to show the component
</details>


----

<details>
  <summary> Hide </summary>

  ```js
  import { Hide } from "cn-react-helpers"

  function App(){
    return (
      <Hide if={true}>
        <h1> hello world! <h1/>
      </Hide>
    )
  }
  ```
  ```if``` - *boolean* - condition to hide the component
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
  <summary> Filter </summary>

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
