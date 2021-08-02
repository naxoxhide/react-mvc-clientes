import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import '../src/App.css';
import Navbar from './components/Navbar';
import ImagenHeader from './components/ImagenHeader';
// import PageComponent from './components/PageComponent';
import MasVendidos from './components//MasVendidos';
import ContainerCategorias from './components/ContainerCategorias';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <ImagenHeader/>
      <ContainerCategorias/>
      <MasVendidos/>
      <Footer/>
    </div>
  );
}

export default App;
