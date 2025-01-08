import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-contents'>
                <h2>Order your favourite food here</h2>
                <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
<<<<<<< HEAD
                <Link to='/carousel'><button>View Menu</button></Link>
=======
                <Link to='/home'></Link><button>View Menu</button>
>>>>>>> b71c288350e0769b1de5224297ecc13d9c6bc3ab
            </div>
        </div>
    )
}

export default Header
