import React from 'react'
import "./Skills.css"
import CssIco from "../iconos/CssIco";
import HtmlIco from "../iconos/HtmlIco";
import JavascriptIco from "../iconos/JavascriptIco";
import ReactIco from "../iconos/ReactIco";
import SassIco from "../iconos/SassIco";
import GitIco from "../iconos/GitIco";
import BoostrapIco from "../iconos/BoostrapIco";
const Skills = () => {
  return (
    <div className="skills">
        <h1>My skills:</h1>
        <div className="icono-skills">
          <div className="blur">
             <div>
               <HtmlIco/>
              </div>
          </div>
          <div className="blur">
            <div>
               <CssIco/>
            </div>
          
          </div>
          <div className="blur">
            <div>
              <JavascriptIco/>
            </div>
           
          </div>
          <div className="blur">
            <div>
               <ReactIco/>
            </div>
          
          </div>
          <div className="blur">
            <div>
              <BoostrapIco/>
            </div>
            
          </div>
          <div className="blur">
            <div>
              <SassIco/>
            </div>
           
          </div>
          <div className="blur">
            <div>
               <GitIco/>
            </div>
          
          </div>
        </div>
      </div>
  )
}

export default Skills
