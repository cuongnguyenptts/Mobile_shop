import React from "react";
import Head from "../view/header";
import Menu from "../view/menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import './product.css'
import iconcart from '../Image/shopping-cart.png';
import { Row, Col } from "reactstrap";
import ProductItem from "./productItem";
import { useAppSelector } from "../redux/hook";
import { selectProducts } from "../redux/pr";
import { selectQuantity } from "../redux/productSlice";
import { Link } from "react-router-dom";

const Products: React.FC = () => {

    const itemProduct = useAppSelector(selectProducts)
    const Quantity = useAppSelector(selectQuantity)

    return (
        <div className="Products">
            <Head></Head>
            <div className="body-Products">
                <Menu></Menu>
                <div className="content-Products">
                    <div className="header-product">
                        <Row className="title-product-row">
                            <Col className="title-product-col">
                                SHOP
                            </Col>
                        </Row>
                        <Row className="header-product-row">
                            <Col sm={10} className='link-product-col'>
                                <Link to="/shop/" className="link">
                                    Shop
                                </Link>
                                / Product
                            </Col>
                            <Col sm={1} className="icon-cart">
                                <img src={iconcart} alt=""></img>
                                <span>{Quantity}</span>
                            </Col>
                        </Row>
                    </div>
                    <div className="data-shop">
                        <div>
                            {itemProduct.map((item) => {
                                return (
                                    <ProductItem
                                        id={item.id}
                                        img={item.img}
                                        name={item.name}
                                        description={item.description}
                                        price={item.price}
                                        star={item.star}
                                        more={item.more}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
