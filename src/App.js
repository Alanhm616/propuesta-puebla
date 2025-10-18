import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Services from "./components/Services";
import About from "./components/About";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Welcome />
        <Services />
        <About />
        <Form />
        
      </main>
      <Footer />
    </>
  );
}

export default App;
