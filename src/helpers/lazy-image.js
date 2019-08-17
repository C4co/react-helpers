import React, { Component } from "react"

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

  isInViewport(elem){
    var bounding = elem.getBoundingClientRect()
    const offset = 200

    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom - offset <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  reload(){
    const item = this.myRef.current

    const action = () => {
      if (this.isInViewport(item)) {
        item.src = this.props.source
        item.style.opacity = "1"

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
          opacity: "0.3",
          background: "red",
          transition: "all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0s",
          ...this.props.style,
        }}
        alt={this.props.alt || ""}
      />
    )
  }
}
