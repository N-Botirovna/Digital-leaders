import React from 'react'

const Title = ({text,style}) => {
  return (
  <h1 className="text-4xl `${style}` font-semibold leading-3 text-center" >{text}</h1>
  )
}

export default Title
