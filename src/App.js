import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Welcome from "./components/Welcome";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Form from "./components/Form";

import Historia from "./components/Navegacion/Historia";
import CoberturaUSA from "./components/Navegacion/CoberturaUSA";
import Importaciones from "./components/Navegacion/Importaciones";
import TerminosEnvio from "./components/Navegacion/TerminosEnvio";

import AvisoPrivacidad from "./components/piepagina/AvisoPrivacidad";
import ArticulosProhibidos from "./components/piepagina/ArticulosProhibidos";

const HomePage = () => (
  <main>
    <Welcome />
    <Hero />
    <Services />
    <About />
    <Form />
  </main>
);

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Página principal */}
        <Route path="/" element={<HomePage />} />

        {/* Páginas de navegación */}
        <Route path="/historia" element={<Historia />} />
        <Route path="/cobertura-usa" element={<CoberturaUSA />} />
        <Route path="/importaciones" element={<Importaciones />} />
        <Route path="/terminos" element={<TerminosEnvio />} />

        {/* Páginas del footer */}
        <Route path="/aviso-de-privacidad" element={<AvisoPrivacidad />} />
        <Route path="/articulos-prohibidos" element={<ArticulosProhibidos />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
