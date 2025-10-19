import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Services from "./components/Services";
import About from "./components/About";
import Form from "./components/Form";

import Historia from "./components/Navegacion/Historia";
import CoberturaUSA from "./components/Navegacion/CoberturaUSA";
import Importaciones from "./components/Navegacion/Importaciones";
import TerminosEnvio from "./components/Navegacion/TerminosEnvio";

const HomePage = () => (
  <main>
    <Hero />
    <Welcome />
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
        <Route path="/" element={<HomePage />} />

        <Route path="/historia" element={<Historia />} />
        <Route path="/cobertura-usa" element={<CoberturaUSA />} />
        <Route path="/importaciones" element={<Importaciones />} />
        <Route path="/terminos" element={<TerminosEnvio />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
