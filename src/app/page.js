import Download from '@/components/sections/Download'
import Faq from '@/components/sections/Faq'
import Features from '@/components/sections/Features'
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
    </div>
  )
}

export default page