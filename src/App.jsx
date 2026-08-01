import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Services from './Components/Services'
import Produits from './Components/Produits'
import Offres from './Components/Offres'
import Histoire from './Components/Histoire'

export default function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Services />
    <Produits/>
    <Offres/>
    <Histoire/>
    </>
  )
}
