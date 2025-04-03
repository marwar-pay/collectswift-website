import Header from '@/Components/Layout/Header'
import React from 'react'
import Banner from './Banner'
import PrivacyPolicy from './Detail'
import Footer from '@/Components/Layout/Footer'

function Privacy() {
  return (
    <div>
        <Header/>
        <Banner/>
        <PrivacyPolicy/>
        <Footer/>

    </div>
  )
}

export default Privacy