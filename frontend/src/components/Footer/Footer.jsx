import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
=======

>>>>>>> b71c288350e0769b1de5224297ecc13d9c6bc3ab
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
<<<<<<< HEAD
          <img src={assets.logo} alt="" />
          <p>Eat.Love.Live.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/privacypolicy"> Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>CONTACT US</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@food-for-life.com</li>
          </ul>
=======
            <img src={assets.logo} alt="" />
            <p>Eat.Love.Live.</p>
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
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>CONTACT US</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@food-for-life.com</li>
            </ul>
>>>>>>> b71c288350e0769b1de5224297ecc13d9c6bc3ab
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © FoodForLife.com - All Right Reserved.</p>
    </div>
  )
}

<<<<<<< HEAD
export default Footer
=======
export default Footer
>>>>>>> b71c288350e0769b1de5224297ecc13d9c6bc3ab
