//import React, { useState, useContext, useEffect } from 'react';
import React, { useState } from 'react';
//import { Carousel, Container, ListGroup, Button } from 'react-bootstrap';
//import { useLocation } from 'react-router-dom';
//import food_list from '../../assets/assets';
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
//import About from '../About/About'
//import Contact from '../Contact/Contact'
//import StoreContextProvider from '../../Context/StoreContext';


const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
      <Header/>
      <ExploreMenu setCategory={setCategory} category={category}/>
<<<<<<< HEAD
      
=======
      <FoodDisplay category={category}/>
>>>>>>> b71c288350e0769b1de5224297ecc13d9c6bc3ab
      <AppDownload/>
    </>
  )
}

export default Home
