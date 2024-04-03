import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Carousel from '../components/carousel/Carousel'
import ListaCelulares from '../components/body/Secciones/ListaCelulares/ListaCelulares'

function Celulares() {
  return (
    <div>
        <Header/>
            <ListaCelulares/>
        <Footer/>

    </div>
  )
}

export default Celulares