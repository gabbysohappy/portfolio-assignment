import React from 'react';
import '../../styles/portfolio.css'

const Portfolio = () => (

  <div class='portfolio'>
    <h2>Portfolio Projects</h2>
    <p class='user-instructions'><i>-Hover Mouse-</i></p>
    <div class='spiderly-container'>
   <img class='img-web' src='https://images.unsplash.com/photo-1566311048615-2096b615ddb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='credit:Olha Sumnikova(Unsplash.com)' />
    <div class='hover-text'>
    <a href='https://github.com/gabbysohappy/spidery_app' target='_blank'>Github Repo</a>
    </div>
    <p class='spiderly'>Spidery.app</p>
    <p class='in-progress'>(In Progress)</p>
    </div>
  </div>
)

export default Portfolio;