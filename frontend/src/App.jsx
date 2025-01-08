import React, { useState } from 'react'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
<<<<<<< HEAD
import { Route, Routes,useLocation } from 'react-router-dom'
=======
import { Route, Routes } from 'react-router-dom'
>>>>>>> b71c288350e0769b1de5224297ecc13d9c6bc3ab
import Cart from './pages/Cart/Cart'
import LoginPopup from './components/LoginPopup/LoginPopup'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import MyOrders from './pages/MyOrders/MyOrders'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify/Verify'
import ExploreMenu from './components/ExploreMenu/ExploreMenu'
import AppDownload from './components/AppDownload/AppDownload'
<<<<<<< HEAD
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import FoodCarouselPage from './components/FoodCarouselPage/FoodCarouselPage';
=======
>>>>>>> b71c288350e0769b1de5224297ecc13d9c6bc3ab


const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    
      <ToastContainer />
<<<<<<< HEAD
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}
=======
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
>>>>>>> b71c288350e0769b1de5224297ecc13d9c6bc3ab
     
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/myorders' element={<MyOrders />} />
          <Route path='/verify' element={<Verify />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/explore-menu" element={<ExploreMenu />} />
          <Route path="/app-download" element={<AppDownload />} />
<<<<<<< HEAD
          <Route path='/privacypolicy' element={<PrivacyPolicy />} />
          <Route path='/carousel' element={<CarouselWrapper />} />
=======
>>>>>>> b71c288350e0769b1de5224297ecc13d9c6bc3ab
        </Routes>
      </div>
      
      
      <Footer />
      
    </>
    
    
  )
<<<<<<< HEAD
};
const CarouselWrapper = () => {
  const location = useLocation();
  const initialCategory = location.state?.initialCategory || 'All';
  return <FoodCarouselPage initialCategory={initialCategory} />;
};
=======
}
>>>>>>> b71c288350e0769b1de5224297ecc13d9c6bc3ab

export default App
