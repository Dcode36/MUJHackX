import React from 'react'
import Navbar from '../essentials/Navbar'
import Hero from './Hero'
import Features from './Features'
import About from './About'
import Contact from './Contact'
const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Features />
            <About />
            <Contact />
        </div>
    )
}

export default HomePage
