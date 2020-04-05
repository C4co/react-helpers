<p align="center">
  <img alt="react" src="https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png" width="120" />
</p>

<h1 align="center">
  React Helpers
</h1>

[![CircleCI](https://circleci.com/gh/C4co/react-helpers.svg?style=svg)](https://circleci.com/gh/C4co/react-helpers)
[![Coverage Status](https://coveralls.io/repos/github/C4co/react-helpers/badge.svg?branch=master)](https://coveralls.io/github/C4co/react-helpers?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/cc1a28ae15bfa4714289/maintainability)](https://codeclimate.com/github/C4co/one-helpers/maintainability)

Some useful react components.

#### Install
```
  $ yarn add cn-react-helpers
```

### Development

Test
```
  $ yarn test
```

### Components

<details>
  <summary> Show component </summary>

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
  <summary> Hide component </summary>

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
  <summary> Each component </summary>

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

  ```chidren``` - *function(index, item, arr)* - returns items
</details>

----

<details>
  <summary> Filte component </summary>

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

  ```chidren``` - *function(index, item, arr)* - returns filtered elements
</details>

### License

MIT © [C4co](https://github.com/C4co)

