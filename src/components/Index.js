import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import Carousel from './carousel/Carousel'
import Destacado from './body/Secciones/Destacado/Destacado'
import Accesorios from './body/Secciones/Accesorios/DestacadoAccesorios'


function Index() {
  return (
    <div>
        <Header/>
        <Carousel/>

        <Destacado/>
        <Accesorios/>
        <Footer/>

    </div>
  )
}

export default Index