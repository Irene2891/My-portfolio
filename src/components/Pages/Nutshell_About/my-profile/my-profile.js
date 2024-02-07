import React from 'react'
import { Link } from 'react-router-dom';
import Nutshell from '../nutshell';
import "../my-profile/my-profile.css";
import {allIcons} from "../../../assets/icons/icons"
import Me from '../../../assets/images/irene.jpg'



const AboutMe = () => {
  const { GitHub, LinkedIn, InstagramIcon }=allIcons

    return (
      <div className="nutshell-container">
  
        <div className="about-me-container">
  
          <div className="img-holder">
            <img
              className="my-self"
              src={Me}
              alt="picture of myself"
            />
          </div>
  
          <div className="what-i-do">
            <meduim className="welcome">Hello, I'm Irene Ezechi</meduim>
            <p className="stack">Javascript and React Developer</p>
            <p className="myStatement">
             I am passionate about creating solutions through innovative developments thereby leaving users with positive
             experiences. I think on my feet hence a vibrant and positive environment is a good fit for 
             me.
            </p>
            <div className="contact-me-icons">
              <button className="contact-icon-btns">
                <a href="https://github.com/irene2891" target="_blank"
                  className="contact-me-links">
                  <GitHub size={20}/>
                </a>
              </button>
              <button className="contact-icon-btns">
                <a href="https://www.linkedin.com/in/irene-ezechi-b97289142" target="_blank"
                className="contact-me-links">
                  <LinkedIn size={20} />
                </a>
              </button>
              <button className="contact-icon-btns">
                <a href="https://www.instagram.com/irene.ezechi?igsh=ZGUzMzM3NWJiOQ==" target="_blank"
                className="contact-me-links">
                  <InstagramIcon size={20} />
                </a>
              </button>
            </div>
            <button className="work-button">
              <Link to="/works" className="my-works-link">My Works</Link>
            </button>
          </div>
        </div>
        </div>
    );
  }

  export default AboutMe
  