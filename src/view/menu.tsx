import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Collapse, Nav, NavItem, NavLink, NavbarToggler, NavbarBrand, } from "reactstrap";
import { Link } from "react-router-dom";
import './menu.css'
import shop from '../Image/shop.png';
import cart from '../Image/cart.png';
import mypro from '../Image/mypro.png'

const Menu: React.FC = () => {
    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <div className="menu" >
            <div className="meun-1">
                <Navbar color="faded" light>
                    <div className="head-menu">
                        <NavbarBrand className="me-auto">Menu</NavbarBrand>
                        <NavbarToggler className="me-2" onClick={showSidebar}></NavbarToggler>
                    </div>
                    <div className="item-menu">
                        <Collapse isOpen={sidebar} navbar>
                            <Nav navbar>
                                <NavItem className="Shop">
                                    <NavLink>
                                        <Link to='/shop/' className="link">
                                            <img src={shop}></img>
                                            <h3 className="h3">Shop</h3>
                                        </Link >
                                    </NavLink>
                                </NavItem>
                                <NavItem className="Shop">
                                    <NavLink>
                                        <Link to='/cart/' className="link">
                                            <img src={cart}></img>
                                            <h3 className="h3">Cart</h3>
                                        </Link >
                                    </NavLink>
                                </NavItem>
                                <NavItem className="Shop">
                                    <NavLink>
                                        <Link to='/MyProfile/' className="link">
                                            <img src={mypro}></img>
                                            <h3 className="h3">MyProfile</h3>
                                        </Link >
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        </div>
    );
}

export default Menu;