import React from 'react'
import './not-found.css'


const NotFound = () => {
  return (
    <div className='not-found'>
<p className='status-code'>404</p>
<p>NOT FOUND</p>
<p className='alert-message'>
    Sorry, the page you are looking for does not exist.
</p>
    </div>
  );
};

export default NotFound