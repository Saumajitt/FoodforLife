import React, { useContext, useState, useEffect } from 'react';
import Slider from 'react-slick';
import FoodItem from '../FoodItem/FoodItem';
import { StoreContext } from '../../Context/StoreContext';
import { useLocation } from 'react-router-dom';
import './FoodCarouselPage.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FoodCarouselPage = () => {
    const { food_list } = useContext(StoreContext);
    const [category, setCategory] = useState('All');
    const [categories, setCategories] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const initialCategory = location.state?.category || 'All';
        setCategory(initialCategory);

        const uniqueCategories = ['All', ...new Set(food_list.map(item => item.category))];
        setCategories(uniqueCategories);
    }, [food_list, location.state]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    return (
        <div className='food-carousel-page'>
            <h2>Top Dishes Near You</h2>
            <div className='category-filter'>
                <label>Filter by Category: </label>
                <select onChange={handleCategoryChange} value={category}>
                    {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>
            {category === 'All' ? (
                <div className='grid-container'>
                    {food_list.map((item) => (
                        <div key={item._id} className='grid-item'>
                            <FoodItem
                                image={item.image}
                                name={item.name}
                                desc={item.description}
                                price={item.price}
                                id={item._id}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <Slider {...settings}>
                    {food_list.filter(item => item.category === category).map((item) => (
                        <div key={item._id} className='carousel-item'>
                            <div className='carousel-item-bg' style={{ backgroundImage: `url(${ item.image})` }}>
                                <FoodItem
                                    image={item.image}
                                    name={item.name}
                                    desc={item.description}
                                    price={item.price}
                                    id={item._id}
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    );
};

export default FoodCarouselPage;