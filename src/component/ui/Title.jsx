import React from 'react'

const Title = ({text,style}) => {
  return (
  <h1 className={`${style}`}>{text}</h1>
  )
}

export default Title
