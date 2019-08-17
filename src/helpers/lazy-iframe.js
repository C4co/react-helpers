import React, { Component } from "react"

/*
  name: LazyIframe
  @source -> string - video url to when iframe is in viewport
*/
export class LazyIframe extends Component {
  constructor() {
    super()
    this.frame = React.createRef()
  }

  isInViewport(elem) {
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
    const iframe = this.frame.current

    const action = () => {
      if (this.isInViewport(iframe)) {
        iframe.src = this.props.source

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
      <iframe
        ref={this.frame}
        {...this.props}
        title={this.props.title || ""}
      ></iframe>
    )
  }
}
