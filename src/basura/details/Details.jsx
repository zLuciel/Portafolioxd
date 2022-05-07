import React, { useState, useEffect } from "react";
import ButoomCv from "../../components/buttom/ButoomCv";
import Skills from '../../components/skills/Skills';
import "./Details.css"
const Details = () => {
  /*const [detailsDynamic, setDetailsDynamic] = useState(false);*/
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const Dynamic = ()=>{
      const heigt = window.scrollY;
      setScroll(heigt);
    }
    Dynamic();
    window.addEventListener('scroll', Dynamic);
    const efecto = () => {
      if(scroll > 160){
        document.querySelector('.details').classList.add('details-dynamic');
        document.querySelector('.skills').classList.add('skills-dynamic');
      }
    }

    efecto();
  }, [scroll]);
  
  return (
    <div className='container-details'>
    <div className="titulo-principal">
      <h1>About</h1>
    </div>
    <div className='flex-details '>
    <div className="details">
      <div className='details-caja'>
      <h1>Who am I?</h1>
      <h2>I am Emmanuel Abregu, a Tech passionate and Web Developer</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque atque
        at impedit tenetur  maxime sunt saepe, vel cupiditate, delectus nam
        quos error necessitatibus modi fuga  tempore consequatur neque eveniet
        suscipit! Lorem ipsum dolor, sit amet consectetur  adipisicing elit.
      </p>
      <section className="info">
        <p>
          {" "}
          <strong>Frase:</strong> Dar mis ideas es lo mejor para una empresa
        </p>
        <p>
          <strong>Edad:</strong> 23
        </p>
        <p>
          <strong>Estado:</strong> soltero
        </p>
      </section>
      <div className='buttom-cv'>
         <ButoomCv/>
      </div>
      </div>
    </div>
    <Skills/>
    </div>
    </div>
  )
}

export default Details
