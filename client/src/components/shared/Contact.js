import React from 'react';
import '../../styles/contact.css';

const Contact = () => (
  <div className='contact'>
  <div className='contact-links'>
  <p>Find Me Here!</p>
    <a href='mailto:gabby.algecera@gmail.com'><img className='gmail-img' src={require('../../images/gmail.png')} alt='gmail' /></a>
    <a href='https://www.linkedin.com/in/gabriella-algecera-46a20913b/' target='_blank' rel='noopener noreferrer'><img className='linkedin-img' src={require('../../images/linkedin.png')} alt='linkedin' /></a>
    <a href='https://twitter.com/gabby_so_happy' target='_blank' rel='noopener noreferrer'><img className='twitter-img' src={require('../../images/twitter.png')} alt='twitter' /></a>
  </div>
  </div>
)

export default Contact;