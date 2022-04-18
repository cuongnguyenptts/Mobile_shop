import React, { Component } from 'react';

import LoginPage from "../src/Auth/loginPage"
import { Routes, Route } from "react-router-dom";
import Home from './view/home';
import { CartProvider } from './context/cart'
class App extends Component {
  render() {
    return (
      <CartProvider>
        <div className='App'>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="home" element={<Home />} />
          </Routes>
        </div>
      </CartProvider>

    );
  }
}
export default App;