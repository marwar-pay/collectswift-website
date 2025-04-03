import React from 'react'
import Info from './Info'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Banner from './Banner'
import News from '../Home/News'
import Map from './Map'

function Contact() {
  return (
    <div>
        <Header/>
        <Banner/>
        <Info/> 
        <Map/>
        <News/>
        <Footer/>
    </div>
  )
}

export default Contact