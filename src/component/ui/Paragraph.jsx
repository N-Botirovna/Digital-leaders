import React from 'react'

const Paragraph = ({text,style}) => {
  return (
  <p className={`font-normal text-md leading-md mx-auto text-center text-[#0A0A0AB2] text-opacity-70 my-5 ${style}`} >{text}</p>
  )
}

export default Paragraph
