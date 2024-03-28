import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import Carousel from './carousel/Carousel'
import Destacado from './body/Secciones/Destacado'

function Index() {
  return (
    <div>
        <Header/>
        <Carousel/>

        <Destacado/>
        <Footer/>

    </div>
  )
}

export default Index