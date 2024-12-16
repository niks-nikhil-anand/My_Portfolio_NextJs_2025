import Download from '@/components/sections/Download'
import Experience from '@/components/sections/Experience'
import Faq from '@/components/sections/Faq'
import Features from '@/components/sections/Features'
import Footer from '@/components/sections/Footer'
import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import Pricing from '@/components/sections/Pricing'
import Testimonials from '@/components/sections/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Features/>
      <Pricing/>
      <Faq/>
      <Testimonials/>
      <Download/>
      <Experience/>
      <Footer/>
    </div>
  )
}

export default page