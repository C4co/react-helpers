import React, { Fragment } from "react"

interface ShowProps {
  if: boolean
  children: any
}

export function Show(props: ShowProps) {
  if (props.if) {
    return <Fragment> {props.children} </Fragment>
  }

  return null
}

Show.defaultProps = {
  if: true
}
