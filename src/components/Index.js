import React from 'react'
import Header from './header/Header'
import Body from './body/Body'
import Footer from './footer/Footer'
import Carousel from './carousel/Carousel'
import ListaCelulares from './body/products/ListaCelulares'
import Destacado from './body/Secciones/Destacado'

function Index() {
  return (
    <div>
        <Header/>
        <Carousel/>
        <Destacado/>
        {/* <ListaCelulares/> */}
        <Footer/>

    </div>
  )
}

export default Index