import React, { Component, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import logo1 from "../Image/logo1.png";
import Navbar from 'react-bootstrap/Navbar'
import loginn from '../Image/LOgin.png'
// import { CNavbar, CCollapse, CContainer, CNavbarToggler } from '@coreui/react'
import { Container } from 'react-bootstrap'
import llogin from '../Auth/loginPage'
import { Link } from "react-router-dom";
function Home() {
    return (
        <div id="web">
            <header>
                <div class="logo1">
                    <img src={logo1} className="img" />
                </div>
                <div className='name'>Mobile Shop
                </div>
                <div class="login">
                    <Link to='/llogin/'>
                        <img src={loginn} className="img-login" />
                    </Link>
                </div>
            </header>

        </div >
    );
}

export default Home;