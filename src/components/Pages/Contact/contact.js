import React from 'react'
import './contact.css';

const  contactLinks=[
    
  {id: 1, url: 'https://www.linkedin.com/in/irene-ezechi-b97289142', label:'linkedin'},
  {id:2, url:'https://github.com/irene2891', label: 'github'},
  {id:3, url:'mailto:ireneezechi@gmail.com', label: 'email'},
  {id: 4, url:'https://www.instagram.com/irene.ezechi?igsh=ZGUzMzM3NWJiOQ==', label: 'instagram'},

];


const Contact = () => {
  
  return (
    <div className="contact-page">
      {contactLinks.map(({ id, url, label }) => (
                <a href={url} key={id} target="_blank" rel="noopener noreferrer">{label}</a>
            ))}
    </div>
  );
}

export default Contact;
