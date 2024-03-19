import React from 'react'
import { Link } from 'react-router-dom';
import Me from '../../assets/images/irene.jpg'
import SocialMediaLinks from '../../ui/socialMediaLinks/SocialMediaLinks';
import './nutshell.css';
import FurtherDetails from '../moredetails/FurtherDetails';

const Nutshell = () => {

    return (
      <div className="nutshell-wrapper">
  
        <div className="about-me-container">
  
          <div className="my-image-wrapper">
            <img
              className="my-image"
              src={Me}
              alt="Irene"
            />
          </div>
  
          <div className="my-profile">
            <meduim className="welcome">Hello, I'm Irene Ezechi</meduim>
            <p className="designation">Javascript and React Developer</p>
            <p className="summary">
             I am passionate about creating solutions through innovative developments thereby leaving users with positive
             experiences. I think on my feet hence a vibrant and positive environment is a good fit for 
             me.
            </p>
           <div><SocialMediaLinks/></div> 
           <Link to='/work' className='my-works-link'>My Works</Link>

            {/* <button className="work-button">
            </button> */}
          </div>
        </div>
        <FurtherDetails/>
        </div>
        
    );
  }

  export default Nutshell
  