import React, { useRef, useEffect } from "react"
import { isInViewport } from "../../dom"

/*
  name: LazyIframe
  @source -> string - video url to when iframe is in viewport
*/
export function LazyIframe(props){
  const frame = useRef(null)

  function reload(){
    const iframe = frame.current

    const action = () => {
      if (isInViewport(iframe)) {
        iframe.src = props.source

        window.removeEventListener("scroll", action)
        window.removeEventListener("resize", action)
      }
    }

    window.addEventListener("scroll", action)
    window.addEventListener("resize", action)

    action()
  }

  useEffect(() => {
    reload()
  })

  return(
    <iframe
      ref={frame}
      {...props}
      title={props.title || ""}
    >
    </iframe>
  )
}
