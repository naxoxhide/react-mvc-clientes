import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function ImagenHeader() {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    return (
        <header className="masthead">
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div data-aos="fade-left" className="col-12 text-end text-uppercase">
                        <h1 className="ml10">
                            <span className="text-wrapper">
                                <span className="letters">Studio Gōrudo</span>
                            </span>
                        </h1>
                        <p className="ml09">Desing Lab - Store</p>
                    </div>
                </div>
            </div>
      </header>
    )
}

export default ImagenHeader
