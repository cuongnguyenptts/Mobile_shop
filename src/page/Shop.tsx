import React from "react";
import './shop.css';
import Head from "../view/header";
import Menu from "../view/menu";
import ItemShop from "./shopItem";
import { Input, Container, Row, Col } from "reactstrap";
import iconsearch from '../Image/search.png';
import iconfilter from '../Image/iconfilter.png';
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { selectShop } from "../redux/pr";

const Shop: React.FC = () => {

    const itemShop = useAppSelector(selectShop);

    return (
        <div className='home'>
            <Head></Head>
            <div className="Ma">
                <Menu></Menu>
                <div className="content-shop">
                    <div className="header-shop">
                        <Row className="title-shop-row">
                            <Col className="title-shop-col">
                                SHOP
                            </Col>
                        </Row>
                        <Row className="header-shop-row">
                            <Col sm={7} className='link-shop-col'>
                                <Link to="/shop/" className="link">
                                    Shop
                                </Link>
                            </Col>
                            <Col sm={4} className='search-col'>
                                <Input
                                    className="search-input"
                                    type="text"
                                    placeholder="Search ..."
                                />
                                <img src={iconsearch} alt=""></img>
                            </Col>
                            <Col sm={1} className='filter-col'>
                                <img src={iconfilter} alt=""></img>
                            </Col>
                        </Row>
                    </div>
                    <div className="data-shop">
                        {itemShop.map((item) => {
                            return (
                                <ItemShop
                                    id={item.id}
                                    img={item.img}
                                    name={item.name}
                                    description={item.description}
                                    price={item.price}
                                    star={item.star}
                                />
                            );
                        })}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Shop;