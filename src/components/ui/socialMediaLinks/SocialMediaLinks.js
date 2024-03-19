import React from 'react'
import { allIcons } from '../../assets/icons/icons';
import './social-media-links.css'
const {GitHub, InstagramIcon, LinkedIn} =allIcons


const SocialMediaLinks = () => {
    const socialLinks = [
        { url: 'https://github.com/irene2891', icon: <GitHub size={20} /> },
        { url: 'https://www.linkedin.com/in/irene-ezechi-b97289142', icon: <LinkedIn size={20} /> },
        { url: 'https://www.instagram.com/irene.ezechi?igsh=ZGUzMzM3NWJiOQ==', icon: <InstagramIcon size={20} /> },
      ];

  return (
    <div className="social-link-icons">
        {socialLinks.map((link, index) => (
        <button key={index} className="social-link-btns">
          <a href={link.url} target="_blank" rel="noopener noreferrer" className="social-links">
            {link.icon}
          </a>
        </button>
      ))}
    </div>
  )
}

export default SocialMediaLinks