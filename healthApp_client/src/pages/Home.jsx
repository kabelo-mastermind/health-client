import React from 'react'
import Herobanner from '../components/Home/Herobanner'
import HealthcareFeatures from '../components/Home/HealthcareFeatures'
import HealthcareSolutions from '../components/Home/HealthcareSolutions'
import WhyChooseUs from '../components/Home/WhyChooseUs '
import MeetTheTeam from '../components/Home/MeetTheTeam'
import ScrollToTopButton from '../components/ScrollToTopButton/ScrollToTopButton'
const Home = () => {
  return (
    <div>
      <Herobanner/>
      <HealthcareFeatures/>
      <HealthcareSolutions/>
      <WhyChooseUs/>
      <MeetTheTeam/>
      <ScrollToTopButton/>
    </div>
  )
}

export default Home