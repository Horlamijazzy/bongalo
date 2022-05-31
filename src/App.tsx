import React from 'react';
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Section2 from "./components/Section2";
import Section1 from "./components/Section1";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4"
import Section5 from "./components/Section5"
import Footer from "./components/Footer"
import Section6 from "./components/Section6"

function App() {
  return (
    <div className="App">
      <Hero />
      <Nav /> 
     <Section2 />
     <Section1 />
     <Section3 />
     <Section4 />
    <Section5 /> 
    <Section6 />
     <Footer />
     
    </div>
  );
}

export default App;
