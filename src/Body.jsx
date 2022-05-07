import React, { useEffect, useState } from "react";
import About from "./components/about/About";
import { Header } from "./components/header/Header";
import Main from "./components/main/Main";
import Nav from "./components/nav/Nav";
import Loader from "./components/loader/Loader";
import Servicios from "./components/servicios/Servicios";
import Footer from "./components/footer/Footer";
const Body = () => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const cargando = () => {
      if (!load) {
        setLoad(true);
      }
    };
    setTimeout(cargando, 2000);
  }, [load]);

  return (
   <>
      {!load && <Loader />}
      {load && (
        <div className="grid-container">
          <Header />
          <Nav />
          <Main />
          <About />
          <Servicios/>
          <Footer/>
        </div>
      )}
   </>
  );
};

export default Body;
