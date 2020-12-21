import React, { Fragment } from "react"

interface HideProps {
  if: boolean
  children: any
}

export function Hide(props: HideProps) {
  if (props.if) {
    return null
  }

  return <Fragment> {props.children} </Fragment>
}

Hide.defaultProps = {
  if: true
}
