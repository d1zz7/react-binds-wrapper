import React from 'react'

export function _If(props) {
  const { children } = props
  return (
    <div>
      {React.Children.map(children, (element) => {
        if (!React.isValidElement(element)) return
        const source = element.props
        if (source._if) {
          return React.cloneElement(element, source)
        }
        if (!source._else && source._if !== false) {
          console.log(source)
          return React.cloneElement(element, source)
        }
        if (source.hasOwnProperty('_for')) {
        }
      })}
    </div>
  )
}

export function _For(props) {
  const { data, children } = props
  return (
    <div>
      {data.map((value) => {
        return React.Children.map(children, (child) =>
          React.cloneElement(child, value)
        )
      })}
    </div>
  )
}

export function _Switch(props) {
  const { of, children } = props
  return (
    <div>
      {React.Children.map(children, (element) => {
        if (!React.isValidElement(element)) return
        const source = element.props

        if (of === source.case) {
          return React.cloneElement(element, source)
        }
      })}
    </div>
  )
}
