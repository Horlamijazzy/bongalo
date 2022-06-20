import React from 'react';
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Section2 from "./components/Section2";
import Section1 from "./components/Section1";
import CarouselExperiences from "./components/CarouselExperiences";
import CarouselFeaturedplaces from "./components/CarouselFeaturedplaces"
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
     <CarouselFeaturedplaces />
     <CarouselExperiences />
    <Section5 /> 
    <Section6 />
     <Footer />         
     
     
    </div>

  );
}

export default App;
