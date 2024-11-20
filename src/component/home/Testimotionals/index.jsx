import React from 'react'
import Container from '../../ui/Container'
import DirectLink from '../../ui/DirectLink'
import HighLight from '../../ui/HighLight'
import Paragraph from '../../ui/Paragraph'
import SubTitle from '../../ui/subTitle'
import TestimotionalsSwiper from './TestimotionalsSwiper'

const Testimotionals = () => {
  return (
    <div className='py-6 mt-4'>
      <Container>
        <HighLight text={"Testimotionals"}/>
        <SubTitle text={"Testimonials from Leaders"}/>
        <Paragraph style={"w-1/2 py-2"} text={"Discover how our community of leaders is making an impact, and read their success stories firsthand."}/>

        <div className="flex justify-between gap-4 py-12">
      <TestimotionalsSwiper reverse={false}/>
      <TestimotionalsSwiper reverse={true}/>
      <TestimotionalsSwiper reverse={false}/>
    </div>
      </Container>
    </div>
  )
}

export default Testimotionals