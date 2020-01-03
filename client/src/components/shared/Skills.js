import React from 'react';
import '../../styles/skill.css';

const Skills = () => (
  <>
  <div id='box1'>
  <h2 className='section-header'>Recently Applied Skills</h2>
  <p className='user-instructions'><i>-Hover Mouse-</i></p>

  <circle id='circle1'>
    QA Skills
  </circle>
  <circle id='circle2'>
    Developer Skills
  </circle>

  <div className='ven-container'>
  <img className='ven' src={require('../../images/ven3.png')} alt='ven-diagram'/>
  <div className='qa-skills'>
    <ul>
    <li>Cypress.io</li>
    <li>Selenium</li>
    <li>JIRA/jQuery</li>
    </ul>
    </div>
  <div className='combined-skills'>
  <ul>
    <li>SQL/PostgreSQL</li>
    <li>Git/Github</li>
    <li>JavaScript</li>
    <li>C#</li>
    </ul>
  </div>
  <div className='dev-skills'>
  <ul>
    <li>Ruby on Rails</li>
    <li>React.js</li>
    <li>HTML</li>
    <li>CSS</li>
    </ul>
    </div>
  </div>
  </div>
  </>
)

export default Skills;