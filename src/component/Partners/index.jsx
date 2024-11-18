import Title from '../ui/Title'
import React from 'react'
import Navbar from '../navbar'
import Container from '../ui/Container'
import Paragraph from '../ui/Paragraph'
import HighLight from '../ui/HighLight'
import SubTitle from '../ui/SubTitle'

const Partnerspage = () => {
  return (
    <div>
      <div className="bg-radial-custom text-center py-2">
        <Container>
          <Navbar />
          <div className="py-8">
            <Title text={`Our valued Partners`}/>
            <Paragraph text={`We collaborate with leading organizations and innovators who share our vision of empowering leaders and driving impactful change.`} style={`w-1/2`}/>
          </div>
        </Container>
      </div>
      <Container>
        <HighLight text={'Partners'}/>
        <SubTitle text={`We’re backed by the best,meet our Partners`} style={`w-1/2`}/>
      </Container>
    </div>
  )
}

export default Partnerspage


