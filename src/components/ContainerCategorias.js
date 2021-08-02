import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function ContainerCategorias() {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    return (
        <section data-aos="fade-up" className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center fw-light">
                            <h2>Categorías</h2>
                            <p className="pColor">Aquí encontraras nuestras principales categorías</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card">
                            <img src="./images/image2.png" className="card-img-top rounded" alt="..."/>
                            <div class="card-img-overlay">
                                <h5 class="card-title card-custom">Maquetas</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card">
                            <img src="./images/image1.png" className="card-img-top rounded" alt="..."/>
                            <div class="card-img-overlay">
                                <h5 class="card-title card-custom">Pinturas</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card">
                            <img src="./images/image6.png" className="card-img-top" alt="..."/>
                            <div class="card-img-overlay">
                                <h5 class="card-title card-custom">Herramientas</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContainerCategorias
