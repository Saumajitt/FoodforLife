import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';

<<<<<<< HEAD
const FoodItem = ({ image, name, price, desc, id }) => {

    const [itemCount, setItemCount] = useState(0);
    const { cartItems, addToCart, removeFromCart, url, currency } = useContext(StoreContext);
=======
const FoodItem = ({ image, name, price, desc , id }) => {

    const [itemCount, setItemCount] = useState(0);
    const {cartItems,addToCart,removeFromCart,url,currency} = useContext(StoreContext);
>>>>>>> b71c288350e0769b1de5224297ecc13d9c6bc3ab

    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
<<<<<<< HEAD
                <img className='food-item-image' src={url + "/images/" + image} alt="" />
                {!cartItems[id]
                    ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                    : <div className="food-item-counter">
                        <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} alt="" />
                        <p>{cartItems[id]}</p>
                        <img src={assets.add_icon_green} onClick={() => addToCart(id)} alt="" />
=======
                <img className='food-item-image' src={url+"/images/"+image} alt="" />
                {!cartItems[id]
                ?<img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                :<div className="food-item-counter">
                        <img src={assets.remove_icon_red} onClick={()=>removeFromCart(id)} alt="" />
                        <p>{cartItems[id]}</p>
                        <img src={assets.add_icon_green} onClick={()=>addToCart(id)} alt="" />
>>>>>>> b71c288350e0769b1de5224297ecc13d9c6bc3ab
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p> <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-desc">{desc}</p>
                <p className="food-item-price">{currency}{price}</p>
            </div>
        </div>
    )
}

<<<<<<< HEAD
export default FoodItem
=======
export default FoodItem
>>>>>>> b71c288350e0769b1de5224297ecc13d9c6bc3ab
