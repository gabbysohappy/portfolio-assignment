import React from 'react';
import '../../styles/portfolio.css'

const Portfolio = () => (
  <div className='portfolio'>
    <h2>GitHub Portfolio</h2>
    <div className='portfolio-container'>

    <div className='spiderly-container'>
   <img className='img-web' src='https://images.unsplash.com/photo-1566311048615-2096b615ddb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='credit:Olha Sumnikova(Unsplash.com)' />
    <div className='hover-text-spidery'>
    <a href='https://github.com/gabbysohappy/spidery_app' target='_blank' rel="noopener noreferrer">Visit the Github Repo</a>
    </div>
    <p className='spiderly-name'>Spidery</p>
    </div>

    <div className='doctor-container'>
   <img className='img-doctor' src='https://images.unsplash.com/photo-1453847668862-487637052f8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80' alt='credit:Jesse Orrico(Unsplash.com)' />
    <div className='hover-text-doctor'>
    <a href='https://github.com/gabbysohappy/Doctor_Office' target='_blank' rel="noopener noreferrer">Visit the Github Repo</a>
    </div>
    <p className='doctor-office-name'>Doctor Office</p>
    </div>
    
    </div>
  </div>
)

export default Portfolio;