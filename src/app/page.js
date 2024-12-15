import Faq from '@/components/sections/Faq'
import Features from '@/components/sections/Features'
import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import Pricing from '@/components/sections/Pricing'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Features/>
      <Pricing/>
      <Faq/>
      
    </div>
  )
}

export default page