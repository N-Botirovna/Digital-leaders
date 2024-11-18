import React from 'react'
import Container from '../../ui/Container'
import DirectLink from '../../ui/DirectLink'
import HighLight from '../../ui/HighLight'
import Paragraph from '../../ui/Paragraph'
import SubTitle from '../../ui/subTitle'
import PostCarousel from '../PostCarousel'

const Events = () => {
  return (
    <div className='py-6 mt-4'>
      <Container>
        <HighLight text={"Events"}/>
        <SubTitle text={"Upcoming Projects & Events"}/>
        <Paragraph style={"w-1/2 py-2"} text={"Join us for exciting initiatives and collaborative events that empower leaders to connect and innovate."}/>
        <DirectLink text={"Read More events"} route={'events'}/>
        <div className="py-6">
            <PostCarousel/>
        </div>
      </Container>
    </div>
  )
}

export default Events