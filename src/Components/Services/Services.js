import React from 'react'
import Header from '../Layout/Header'
import Banner from './Banner'
import ServiceMarque from '../Home/Servicwmarqu'
import Service from './Service'
import ServicesSection from './Servicesec'
import News from '../Home/News'
import Footer from '../Layout/Footer'
import WhyChooseUs from '../Home/Why'
import CounterSection from '../Home/Counter'

function ServicesC() {
  return (
    <div>
        <Header/>
        <Banner/>
        <Service/>
        <ServicesSection/>
        
        <CounterSection/>
        <WhyChooseUs/>
        <ServiceMarque/>
        <News/>
        <Footer/>
    </div>
  )
}

export default ServicesC