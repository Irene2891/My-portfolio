import React from 'react'
import SocialMediaLinks from '../socialMediaLinks/SocialMediaLinks'
import './footer.css'




const Footer = () => {
  return (
    <footer className='footer'>
        <div>
            <p> Copyright &copy; 2024 Irene_Gigi. All rights reserved.
            </p>
        </div>
        <div className='footer-links'><SocialMediaLinks/></div> 

        

    </footer>
    
  )
}

export default Footer