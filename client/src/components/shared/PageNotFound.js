import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <div className='404-page'>
    <h1>404 page not found</h1>
    <Link to='/'>
      Go Home
    </Link>
  </div>
)
export default PageNotFound;