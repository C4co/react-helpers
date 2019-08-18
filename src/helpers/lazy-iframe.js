import React, { Component } from "react"
import { isInViewport } from "../dom"

/*
  name: LazyIframe
  @source -> string - video url to when iframe is in viewport
*/
export class LazyIframe extends Component {
  constructor() {
    super()
    this.frame = React.createRef()
  }

  reload(){
    const iframe = this.frame.current

    const action = () => {
      if (isInViewport(iframe)) {
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
