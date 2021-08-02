import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../product.less'

function MasVendidos() {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    return (
        <section data-aos="fade-left" className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center fw-light">
                            <h2>Más Vendidos</h2>
                            <p className="pColor">Aquí encontraras nuestros productos más populares</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MasVendidos
