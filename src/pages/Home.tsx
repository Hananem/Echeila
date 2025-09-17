import React from 'react'
import HeroGeometric from '@/components/HeroGeometric'  
import About from '@/components/About'  
import Services from '@/components/Services'  
import DownloadSection from '@/components/DownloadSection'  
import HowItWorks from '@/components/HowItWorks'  

export default function Home() {
  return (
    <div>
      <HeroGeometric />   
      <About />   
      <Services />   
      <DownloadSection />   
      <HowItWorks />   
      
    </div>
  )
}
