import React from 'react'

import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Manual from '../components/Manual'
import FAQ from '../components/FAQ.JSX'
import Footer from '../components/Footer'
import LogoSlider from '../components/LogoSlider'
import RecentNews from '../components/RecentNews'
// import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <div>
        {/* <NavBar /> */}
        <Hero />
        <About />
        <Services />
        <Manual />
        <LogoSlider />
        <FAQ />
        <RecentNews />
        <Footer />
    </div>
  )
}

export default Home