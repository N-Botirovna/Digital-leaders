import React from 'react'
import Container from '../../ui/Container'
import DirectLink from '../../ui/DirectLink'
import HighLight from '../../ui/HighLight'
import Paragraph from '../../ui/Paragraph'
import SubTitle from '../../ui/subTitle'
import PostCarousel from '../PostCarousel'

const LatestGrants = () => {
  return (
    <div className='py-4'>
      <Container>
        <HighLight text={"Latest Grants"}/>
        <SubTitle text={"Recent Grant Opportunities"}/>
        <Paragraph style={"w-1/2 py-2"} text={"Explore our latest grants designed to support visionary projects and initiatives that drive change."}/>
        <DirectLink text={"Read More Requirements"} route="grands"/>
        <div className="py-6">
            <PostCarousel/>
        </div>
      </Container>
    </div>
  )
}

export default LatestGrants
