import Header from '@/Components/Layout/Header'
import React from 'react'
import Banner from './Banner'
import TermsAndConditions from './Detail'
import Footer from '@/Components/Layout/Footer'

function Terms() {
  return (
    <div>
        <Header/>
        <Banner/>
        <TermsAndConditions/>
        <Footer/>
    </div>
  )
}

export default Terms