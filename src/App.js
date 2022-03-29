import React, { Component } from 'react';

import LoginPage from "../src/Auth/loginPage"
import { Routes, Route, Link } from "react-router-dom";
import Home from '../src/Auth/Home';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="Home" element={<Home />} />
        </Routes>
      </div>
    );
  }
}

export default App;