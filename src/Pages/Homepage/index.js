import React, { useEffect } from 'react'
import HeroSection from './Components/HeroSection'
import FavoriteLocation from './Components/FavoriteLocation'
import TopProperties from './Components/TopProperties'
import PropertyType from './Components/PropertyType'
import ExclusiveOffers from './Components/ExclusiveOffers'
import SpecialConnection from './Components/SpecialConnection'
import Achievements from './Components/Achievements'
import Testimonials from './Components/Testimonials'




function Homepage() {


    document.title = 'Histay - Homepage'




    return (
        <>
        <div className='font-mohave'>
        <HeroSection />
        <FavoriteLocation />
        <TopProperties />
        <PropertyType  />
        {/* <TopProperties /> */}
         <ExclusiveOffers />
         <SpecialConnection />
         <Achievements />
         <Testimonials />
          
             </div>
        </>
    )
}

export default Homepage


