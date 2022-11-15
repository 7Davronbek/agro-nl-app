import React from 'react'
import AboutContainer from '../components/AboutUs/AboutContainer/AboutContainer'
import AboutHome from '../components/AboutUs/AboutHome/AboutHome'
import AboutMission from '../components/AboutUs/AboutMission/AboutMission'
import AboutOsnovnoy from '../components/AboutUs/AboutOsnovnoy/AboutOsnovnoy'
import AboutPartne from '../components/AboutUs/AboutPartne/AboutPartne'
import AboutPartners from '../components/AboutUs/AboutPartners/AboutPartners'

export default function AboutUsPage() {
  return (
    <>
    <AboutHome />
    <AboutContainer />
    <AboutPartners />
    <AboutOsnovnoy />
    <AboutMission />
    <AboutPartne />
    </>
  )
}
