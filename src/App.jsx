import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ServicesTabs from './components/ServicesTabs'
import CustomerReviews from './components/CustomerReviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <ServicesTabs />
    <CustomerReviews />
    <Contact />
    <Footer />
    </>
  )
}

export default App
