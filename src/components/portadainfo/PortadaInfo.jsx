import React from "react";
import "./PortadaInfo.css";
import Butoom from "../buttom/Butoom";
const PortadaInfo = () => {
  return (
    <div className="container-portada">
      <div className="titulo-portada">
        <p>Hello, mi name is</p>
        <h2>EMMANUEL ABREGÚ</h2>
        <h1>
          I'm a <span className="txt-dynamic">Web Developer.</span>
        </h1>
        <Butoom />
      </div>
    </div>
  );
};

export default PortadaInfo;
