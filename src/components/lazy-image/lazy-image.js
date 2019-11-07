import React, { Component } from "react"
import { isInViewport } from "../../dom"

/*
  name: LazyImage
  @loader -> string - image url to show at the first time
  @source -> string - image url to show when appear in view port
*/
export class LazyImage extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  reload(){
    const item = this.myRef.current

    const action = () => {
      if (isInViewport(item)) {
        item.src = this.props.source

        window.removeEventListener("scroll", action)
        window.removeEventListener("resize", action)
      }
    }

    window.addEventListener("scroll", action)
    window.addEventListener("resize", action)

    action()
  }

  componentDidMount() {
    this.reload()
  }

  render() {
    return (
      <img
        {...this.props}
        ref={this.myRef}
        src={this.props.loader}
        style={{
          ...this.props.style,
        }}
        alt={this.props.alt || ""}
      />
    )
  }
}
