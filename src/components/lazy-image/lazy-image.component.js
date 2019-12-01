import React, { useEffect, useRef } from "react"
import { isInViewport } from "../../dom"

/*
  name: LazyImage
  @loader -> string - image url to show at the first time
  @source -> string - image url to show when appear in view port
*/

export function LazyImage(props){
  const imageRef = useRef(null)

  function reload(){
    const item = imageRef.current

    function action(){
      if (isInViewport(item)) {
        item.src = props.source

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
    <img
      {...props}
      ref={imageRef}
      src={props.loader}
      style={{
        ...props.style,
      }}
      alt={props.alt || ""}
    />
  )
}
