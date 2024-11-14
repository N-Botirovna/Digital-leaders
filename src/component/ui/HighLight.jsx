import React from 'react'

const HighLight = ({text,style}) => {
  return (
  <p className={`font-normal text-sm leading-xs text-center text-[#B060FF]text-opacity-70 my-5 ${style}  `} >{text}</p>
  )
}
export default HighLight