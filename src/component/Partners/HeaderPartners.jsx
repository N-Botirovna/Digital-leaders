import React from 'react'
import Container from '../ui/Container'
import Navbar from '../navbar'
import Paragraph from '../ui/Paragraph'
import Title from '../ui/Title'

const HeaderPartners = () => {
    return (
        <div className="bg-gradient-b h-[60vh]"
            style={{
                backgroundImage: 'linear-gradient(to bottom , #FFFFFF 28%, #FAF5FF 70%, #FAF5FF 100%)',
            }}>
            <Container>
                <Navbar />
                <Title
                    text="Our Valued Partners"
                    style="" />
                <Paragraph
                    style="w-1/2"
                    text="We collaborate with leading organizations and innovators who share our vision of empowering leaders and driving impactful change." />
            </Container>
        </div>
    )
}

export default HeaderPartners;
