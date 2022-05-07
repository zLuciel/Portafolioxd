import React from "react";
import "./Servicios.css";
import { faImages,faBook,faPenRuler} from "@fortawesome/free-solid-svg-icons";
import CardDynamic from "../card-dynamic/CardDynamic";
const Servicios = () => {
  const Cardsinfo = [
    {
      titulo: "UI Desing",
      texto: "Lorem ipsum is simply text of the printing type.",
      icon :faImages,
    },
     {
        titulo: "UI Desing",
        texto: "Lorem ipsum is simply text of the printing type. ",
        icon: faBook,
      },
      {
        titulo: "UI Desing",
        texto: "Lorem ipsum is simply text of the printing type.",
        icon: faPenRuler,
      },
  ];
  return (
    <div className="servicios">
      <div className="titulo-servicios">
        <h1>Servicios</h1>
      </div >
      <div className='container-card'>
          { Cardsinfo.map((card,index) =><CardDynamic key={index} titulo={card.titulo} texto={card.texto} faImages={card.icon}/>)}
      </div>
    </div>
  );
};

export default Servicios;
