import React from 'react'
import Intro from '../Home/Intro'
import MissionSection from '../Home/Mission'
import Banner from './Banner'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import TestimonialsPage from './Testimonial'
import News from '../Home/News'
import OurPresence from './Presence'

function AboutComponent() {
  return (
    <div>
        <Header/>
        <Banner/>
        <Intro/>
        <MissionSection/>
        <OurPresence/>
        <TestimonialsPage/>
        <News/>
        <Footer/>
    </div>
  )
}

export default AboutComponent