import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome , faRobot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <footer className="text-center text-lg-start bg-light text-muted">
          <section
            className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">  
            </div>
          </section>

          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4 footerText">
                    <FontAwesomeIcon icon={faRobot}/> Studio Gōrudo
                  </h6>
                  <p className="footerTextMin">
                    Desing Lab y Tienda, para suplir tu demanda por tus plásticos favoritos.
                  </p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4 footerText">
                    Productos
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">Bandai</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Modo*</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Kotobukiya</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Custom</a>
                  </p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4 footerText">
                    Link Rápidos
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">Pricing</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Mi Cuenta</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Orders</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Ayuda</a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4 footerText">
                    Contacto
                  </h6>
                  <p><FontAwesomeIcon icon={faHome}/>&nbsp; Chile,Santiago</p>
                  <p>
                    <FontAwesomeIcon icon={faEnvelope}/>
                    &nbsp; test@correo.cl
                  </p>
                  <p><FontAwesomeIcon icon={faPhone}/>&nbsp; + 569 97884051</p>
                  <p><FontAwesomeIcon icon={faPhone}/>&nbsp; + 569 97884051</p>
                </div>
              </div>
            </div>
          </section>

          <div className="text-center p-4">
            © 2021 Copyright:
            <a className="text-reset fw-bold" href="">&nbsp;Ignacio Rojas</a>
          </div>
      </footer>
    )
}

export default Footer
