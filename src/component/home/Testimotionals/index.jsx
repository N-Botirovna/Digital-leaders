import React from 'react'
import Container from '../../ui/Container'
import DirectLink from '../../ui/DirectLink'
import HighLight from '../../ui/HighLight'
import Paragraph from '../../ui/Paragraph'
import SubTitle from '../../ui/subTitle'

const Testimotionals = () => {
  return (
    <div className='py-6 mt-4'>
      <Container>
        <HighLight text={"Testimotionals"}/>
        <SubTitle text={"Testimonials from Leaders"}/>
        <Paragraph style={"w-1/2 py-2"} text={"Discover how our community of leaders is making an impact, and read their success stories firsthand."}/>
      </Container>
    </div>
  )
}

export default Testimotionals