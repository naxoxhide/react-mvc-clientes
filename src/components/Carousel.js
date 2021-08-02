import React from 'react'

function Carousel() {
    return (
        <div className="mt-5 px-lg-5">
            <div id="carouselExampleControls" className="carousel slide mb-2 mb-lg-0" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./images/banner7.png" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="./images/banner6.png" className="d-block w-100" alt="..."/>
                    </div>
                        <div className="carousel-item">
                    <img src="./images/banner5.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel
