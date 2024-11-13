import  Container  from '../../ui/Container'
import React from 'react'
import HighLight from '../../ui/HighLight'
import SubTitle from '../../ui/subTitle'
import Paragraph from '../../ui/Paragraph'
import LeaderCard from './LeaderCard'
import image from "../../../assets/images/home/Savanna.png"

const TopLeaders = () => {
  return (
    <div className='py-6'>
      <Container>
        <HighLight text={"Top Leaders"}/>
        <SubTitle text={"Top Leaders in Action"}/>
        <Paragraph text={"Meet the inspiring individuals who are making waves in their fields and leading transformative projects."} style={"w-1/2 py-2"}/>
        <div className="py-14 flex items-center justify-between">
            <LeaderCard image={image} name={"Savannah Nguyen"} position={"Community Meneger"}/>
            <LeaderCard image={image} name={"Savannah Nguyen"} position={"Community Meneger"}/>
            <LeaderCard image={image} name={"Savannah Nguyen"} position={"Community Meneger"}/>
            <LeaderCard image={image} name={"Savannah Nguyen"} position={"Community Meneger"}/>
            <LeaderCard image={image} name={"Savannah Nguyen"} position={"Community Meneger"}/>
        </div>
      </Container>
    </div>
  )
}

export default TopLeaders
