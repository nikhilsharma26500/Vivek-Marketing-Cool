import React from 'react'
import Navbar from './navbar'
import Tabs from './tabs'
import MainBranding from './mainBranding'
import Slideshow from './slideshow'
import Footer from './footer'

const main = () => {
  return (
    <div>
        <Navbar/>
        <Tabs/>
        <MainBranding/>
        <Slideshow/>
        <Footer/>
    </div>
  )
}

export default main