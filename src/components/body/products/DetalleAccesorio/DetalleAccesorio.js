import React from 'react'
import data from '../DataAccesorios';
import { useParams } from 'react-router-dom';
import Header from '../../../header/Header';
import Footer from '../../../footer/Footer';
import Informacion from '../../Secciones/Informacion/Informacion';

function DetalleAccesorio() {
    const { id } = useParams();
    const accesorio = data.find(item => item.id === parseInt(id));

    if (!accesorio) {
        return <div>No se encontró el accesorio</div>;
    }
    return (
        <div>
            <Header />
            <div className="container mt-5 pt-5">
                <div className="card shadow-sm">
                    <h1 className="card-title mt-4 text-center">Información del accesorio</h1>
                    <div className="row g-0">
                        <div className="col-md-6 text-center mt-5 ">
                            <h3>{accesorio.nombre}</h3>
                            <img src={accesorio.imagen} className="img-fluid rounded-start p-5" alt={accesorio.nombre} />

                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                            <div className="card-body">

                                <div className="form-group">
                                    <p className="form-control-plaintext mb-2"><strong>Nombre:</strong> {accesorio.nombre}</p>
                                    <p className="form-control-plaintext mb-2"><strong>Precio:</strong> {accesorio.precio}</p>
                                    <p className="form-control-plaintext mb-3"><strong>Descripción: </strong>{accesorio.descripcion}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center py-2'>
                        <button className='btn btn-success'>COMPRAR</button>
                    </div>
                </div>
            </div>

            <Informacion />
            <Footer />

        </div>
    )
}

export default DetalleAccesorio