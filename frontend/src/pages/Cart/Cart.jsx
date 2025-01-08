<<<<<<< HEAD
import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount,
    url,
    currency,
    deliveryCharge
  } = useContext(StoreContext);
=======
import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {cartItems, food_list, removeFromCart,getTotalCartAmount,url,currency,deliveryCharge} = useContext(StoreContext);
>>>>>>> b71c288350e0769b1de5224297ecc13d9c6bc3ab
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
<<<<<<< HEAD
        <table className="cart-items-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {food_list.map((item, index) => {
              if (cartItems[item._id] > 0) {
                return (
                  <tr key={index}>
                    <td><img src={`${url} /images/${item.image}`} alt="" /></td>
                    <td>{item.name}</td>
                    <td>{currency}{item.price}</td>
                    <td>{cartItems[item._id]}</td>
                    <td>{currency}{item.price * cartItems[item._id]}</td>
                    <td className='cart-items-remove-icon' onClick={() => removeFromCart(item._id)}>x</td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
=======
        <div className="cart-items-title">
          <p>Items</p> <p>Title</p> <p>Price</p> <p>Quantity</p> <p>Total</p> <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id]>0) {
            return (<div key={index}>
              <div className="cart-items-title cart-items-item">
                <img src={url+"/images/"+item.image} alt="" />
                <p>{item.name}</p>
                <p>{currency}{item.price}</p>
                <div>{cartItems[item._id]}</div>
                <p>{currency}{item.price*cartItems[item._id]}</p>
                <p className='cart-items-remove-icon' onClick={()=>removeFromCart(item._id)}>x</p>
              </div>
              <hr />
            </div>)
          }
        })}
>>>>>>> b71c288350e0769b1de5224297ecc13d9c6bc3ab
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
<<<<<<< HEAD
          <table className="cart-total-table">
            <tbody>
              <tr>
                <th>Subtotal</th>
                <td>{currency}{getTotalCartAmount()}</td>
              </tr>
              <tr>
                <th>Delivery Fee</th>
                <td>{currency}{getTotalCartAmount() === 0 ? 0 : deliveryCharge}</td>
              </tr>
              <tr>
                <th>Total</th>
                <td><b>{currency}{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + deliveryCharge}</b></td>
              </tr>
            </tbody>
          </table>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here:</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Promo code' />
=======
          <div>
            <div className="cart-total-details"><p>Subtotal</p><p>{currency}{getTotalCartAmount()}</p></div>
            <hr />
            <div className="cart-total-details"><p>Delivery Fee</p><p>{currency}{getTotalCartAmount()===0?0:deliveryCharge}</p></div>
            <hr />
            <div className="cart-total-details"><b>Total</b><b>{currency}{getTotalCartAmount()===0?0:getTotalCartAmount()+deliveryCharge}</b></div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='promo code'/>
>>>>>>> b71c288350e0769b1de5224297ecc13d9c6bc3ab
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );
};

export default Cart;
=======
  )
}

export default Cart
>>>>>>> b71c288350e0769b1de5224297ecc13d9c6bc3ab
