import './App.css';
import React from "react";
import "@fontsource/roboto";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Select from "./Components/Select/Select";
import Think from './Components/Think/Think';
import Remote from "./Components/Remote/Remote";
import Developers from './Components/Developers/Developers';
import Now from "./Components/Now/Now";
import Footer from "./Components/Footer/Footer";

function App() {

  return (
    <>
        <Header />
        <Hero />
        <Select />
        <Think />
        <Remote />
        <Developers />
        <Now />
        <Footer />
    </>
  );
} 

export default App;