import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-section'>
          <ul>
            
            <li><a href='#home'>Home</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#requests'>Requests</a></li>
            <li><a href='#contact'>Contact Us</a></li>
            <li><a href='#about'>About Us</a></li>
          </ul>
        </div>
        <div className='footer-social'>
        <div className='footer-section'>
          <ul>
            <li>Email: info@services.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Main St, City, Country</li>
          </ul>
        </div>
        <div className='footer-section'>
          <div className='social-links'>
            <a href='#facebook'><i className='fab fa-facebook-f'><img src={assets.facebook_logo} alt="facebook" /></i></a>
            <a href='#twitter'><i className='fab fa-twitter'><img src={assets.x_logo} alt="X" /></i></a>
            <a href='#instagram'><i className='fab fa-instagram'><img src={assets.instagram_logo} alt="Instagram" /></i></a>
            <a href='#linkedin'><i className='fab fa-linkedin-in'><img src={assets.linkedin_logo} alt="Linkdin" /></i></a>
          </div>
        </div>
        </div>

      </div>
      
      <div className='footer-bottom'>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
    // <div className='footer' id='footer'>
    //     <div className='footer-content'>
    //         <div className="footer-content-left">
    //             <img src={assets.logo} alt="" />
    //             <p>ReqSer</p>
    //         </div>
    //         <div className="footer-content-center">

    //         </div>
    //         <div className="footer-content-right">

    //         </div>
    //     </div>

    // </div>
  )
}

export default Footer