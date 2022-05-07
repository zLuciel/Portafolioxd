import React from 'react'
import "./Skills2.css"
import {faCss3Alt,faHtml5,faJs,faReact,faBootstrap,faSass,faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Skills = () => {
  return (
    <div className="skills-container">
        <h1>My skills:</h1>
        <div className='icon-skills2'>
          <div><FontAwesomeIcon icon={faHtml5} className="iconos-skills"/></div>
          <div><FontAwesomeIcon icon={faCss3Alt} className="iconos-skills"/></div>
          <div><FontAwesomeIcon icon={faJs} className="iconos-skills"/></div>
          <div><FontAwesomeIcon icon={faReact} className="iconos-skills"/></div>
          <div><FontAwesomeIcon icon={faBootstrap} className="iconos-skills"/></div>
          <div><FontAwesomeIcon icon={faSass} className="iconos-skills"/></div>
          <div><FontAwesomeIcon icon={faGitAlt} className="iconos-skills"/></div>
        </div>
      </div>
  )
}

export default Skills
