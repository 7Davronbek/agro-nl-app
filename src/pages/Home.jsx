import React from 'react'
import AboutUs from '../components/Home/AboutUs/AboutUs'
import Contacts from '../components/Home/Contact/Contacts'
import HomePage from '../components/Home/HomePage/HomePage'
import News from '../components/Home/News/News'
import OurClients from '../components/Home/OurClients/OurClients'
import TypesOfLog from '../components/Home/TypesOfLog/TypesOfLog'
import UslugHome from '../components/Home/UslugHome/UslugHome'


export default function Home() {
  return (
    <>
    <HomePage /> 
    <TypesOfLog /> 
    <AboutUs />
    <UslugHome />
    <News />
    <OurClients />
    <Contacts />
    </>
  )
}
