import React from 'react'

import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Manual from '../components/Manual'
import FAQ from '../components/FAQ'
// import Footer from '../components/Footer'
import LogoSlider from '../components/LogoSlider'
import RecentNews from '../components/RecentNews'
import Reference from '../components/Reference'
// import NavBar from '../components/NavBar'
import { useTranslation } from 'react-i18next';
import PageSeo from '../components/PageSeo';

const Home = () => {
  return (
    <div>
        <PageSeo pageKey="home" />
        <Breadcrumb />
        <Hero />
        <About />
        <Services />
        <Manual />
        <LogoSlider />
        <FAQ />
        <RecentNews />
        <Reference />
    </div>
  )
}

export default Home