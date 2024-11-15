import React from 'react'
import Company from './AboutCommpany'
import Header from '../components/header'
import Testimonials from './Testimonials'
import Footer from '../components/footer'

function company() {
  return (
    <div>
        <Header />
        <Company />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default company