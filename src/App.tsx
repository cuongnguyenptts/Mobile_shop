import React from 'react';
import Login from './Auth/loginPage';
import { Route, Routes } from "react-router-dom";
import Home from './view/home';
import Shop from './page/Shop';
import MyProfile from './page/Myprofile';
import Product from './page/products';
import Cart from './page/cart';
const App: React.FC = () => {
  return (
    <>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='myprofile' element={<MyProfile />} />
          <Route path='product' element={<Product />} />
          <Route path='cart' element={<Cart />} />
        </Routes>
      </div>
    </>

  )
}

export default App;
