import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import logo1 from "../Image/logo1.png";
import loginn from '../Image/LOgin.png'
const Header: React.FC = () => {
    return (
        <div id="web">
            <header>
                <div className="logo1">
                    <img src={logo1} className="img" />
                </div>
                <div className='name'>Mobile Shop
                </div>
                <div className="login">
                    <img src={loginn} className="img-login" />
                </div>
            </header>

        </div >
    );
}

export default Header;
