import React from "react";
import Lapor from "./components/Lapor/Lapor";
import Artikel from "./components/Artikel/Artikel";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Lapor/>
      <Artikel/>
      <Footer/>
    </div>
  );
}

export default App;
