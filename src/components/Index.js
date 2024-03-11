import React from 'react'
import Header from './header/Header'
import Body from './body/Body'
import Footer from './footer/Footer'
import Carousel from './carousel/Carousel'
import ListaProductos from './body/products/ListaProductos'
import Redmi from './body/Secciones/Redmi'

function Index() {
  return (
    <div>
        <Header/>
        <Carousel/>
        <Redmi/>
        <ListaProductos/>

        <Footer/>

    </div>
  )
}

export default Index