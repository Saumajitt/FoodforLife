<<<<<<< HEAD
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './ExploreMenu.css';
import { StoreContext } from '../../Context/StoreContext';

const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleCategoryClick = (item) => {
    setCategory(item.menu_name === category ? 'All' : item.menu_name);
    navigate('/carousel', { state: { category: item.menu_name } }); // Redirect to FoodCarouselPage with category state
  };

=======
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import './ExploreMenu.css'
import { StoreContext } from '../../Context/StoreContext'

const ExploreMenu = ({category,setCategory}) => {

  const {menu_list} = useContext(StoreContext);
  
>>>>>>> b71c288350e0769b1de5224297ecc13d9c6bc3ab
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Our Menu</h1>
      
      <div className="explore-menu-list">
<<<<<<< HEAD
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(item)}
            className={`explore-menu-list-item ${category === item.menu_name ? 'active' : ''}`}
          >
            <img src={item.menu_image} alt="" />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
=======
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img src={item.menu_image} className={category===item.menu_name?"active":""} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
>>>>>>> b71c288350e0769b1de5224297ecc13d9c6bc3ab
