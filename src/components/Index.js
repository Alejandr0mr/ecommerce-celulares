import React from 'react'
import Header from './header/Header'
import Body from './body/Body'
import Footer from './footer/Footer'
import Carousel from './carousel/Carousel'
import ListaProductos from './body/products/ListaProductos'

function Index() {
  return (
    <div>
        <Header/>
        <Carousel/>
        <ListaProductos/>

        <Footer/>

    </div>
  )
}

export default Index