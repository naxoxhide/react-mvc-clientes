import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function PageComponent() {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    return (
        <section className="py-5">
            <div data-aos="fade-up" className="container">
                <h2 className="fw-light">Studio Gōrudo</h2>
                <p>Nace de la necesidad de entregar un equipo de trabajo tanto para trabajo profesional de pintado como de ventas de insumos.</p>
            </div>
        </section>
    )
}

export default PageComponent
