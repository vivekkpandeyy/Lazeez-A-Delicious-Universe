import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
return (
   <div className='footer' id='footer'>
      <div className="footer-content">
         <div className="footer-content-left">
            <img className='footer-logo' src={assets.logo} alt="" />
            <p>Lazeez - A journey through rich flavors and fresh ingredients, delivered right to your door. Experience the joy of effortless dining with a variety of mouthwatering meals, prepared with love and delivered with care.</p>
            <div className="footer-social-icons">
               <img src={assets.facebook_icon} alt="" />
               <img src={assets.twitter_icon} alt="" />
               <img src={assets.linkedin_icon} alt="" />
            </div>
         </div>
         <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
               <li>Home</li>
               <li>About us</li>
               <li>Delivery</li>
               <li>Privacy Policy</li>
               <li>Security</li>
               <li>Terms</li>
               <li>Partner with us</li>
               <li>Work for us</li>
            </ul>
         </div>
         <div className="footer-content-right">
            <h2>Get in Touch</h2>
            <ul>
               <li>+91-9732764081</li>
               <li>connect@lazeez.com</li>
            </ul>
         </div>
      </div>
      <hr />
      <p className="footer-copyright">
         copyright 2024 &#169; Lazeez.com - All Right Reserved.
      </p>
      </div>
   )
}

export default Footer
