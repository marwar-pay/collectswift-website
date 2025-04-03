import React from 'react'
import Home from './Home'
import Header from '../Layout/Header'
import Slider from './Slider'
import Marque from './Marque'
import Intro from './Intro'
import Services from './Service'
import Agent from './Agent'
import WhyChooseUs from './Why'
import CounterSection from './Counter'
import PlatformSection from './Platform'
import MissionSection from './Mission'
import Contact from './Connect'
import News from './News'
import Footer from '../Layout/Footer'
import ServiceMarque from './Servicwmarqu'


function HomeComponent() {
  return (
    <div>
      <Header/>
      <Slider/>
      <Marque/>
      <Intro/>
      <Services/>
      <Agent/>
      <WhyChooseUs/>
      <CounterSection/>
      <PlatformSection/>
      <MissionSection/>
      <ServiceMarque/>
      <Contact/>
      <News/>
      <Footer/>
     
      </div>
  )
}

export default HomeComponent