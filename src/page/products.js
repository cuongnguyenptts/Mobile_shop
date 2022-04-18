import React from "react";
import Head from "./header"
import Menu from "./menu"
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import imgCart from '../Image/shopping-cart.png'
import { CardText, CardTitle, CardImg } from "reactstrap";
import { Container, Row, Col } from 'reactstrap';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import data from "./data";
import { CartContext } from '../context/cart'

export default class Home extends React.Component {
    render() {
        return (
            <div className='home'>
                <Head></Head>
                <div className="Ma">
                    <Menu></Menu>
                    <Container className="container">
                        <Row className="Row">
                            <Col>
                                <Row className="row-shop-1">
                                    Shop
                                </Row>
                                <Row className="row-shop-2">
                                    Shop
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <div className="data-shop">
                                {data.productData.map((item) => {
                                    return (
                                        <Row>
                                            <Col sm={4} className="img-product-data-row">
                                                <CardImg
                                                    className="img-product-data"
                                                    src={item.img}
                                                ></CardImg>
                                            </Col>
                                            <Col sm={8} className="info-product-data-row">
                                                <CardTitle className="info-product-data-name">
                                                    {item.name}
                                                </CardTitle>
                                                <CardText className="info-product-data-description">
                                                    {item.description}
                                                </CardText>
                                                <CardText className="info-product-data-price">
                                                    {item.price}
                                                </CardText>
                                                <CardImg
                                                    className="info-product-data-star"
                                                    src={item.star}
                                                />
                                                <div className="info-product-data-button">
                                                    <Link to='/cart'>
                                                        <Button className="button-buy">
                                                            Mua Ngay
                                                        </Button>
                                                    </Link>
                                                    <CartContext.Consumer>
                                                        {({ addtoCart }) => (<Button onClick={() => addtoCart(item)} className="button-addtocart">
                                                            Thêm vào giỏ hàng
                                                        </Button>)}
                                                    </CartContext.Consumer>


                                                </div>
                                            </Col>
                                            <Col>
                                                <CardImg
                                                    className="info-product-data-more"
                                                    src={item.more}
                                                />
                                            </Col>
                                        </Row>
                                    )
                                })}
                            </div>
                        </Row>
                    </Container>
                    <Col className="Col-cart">
                        <Row className="d"></Row>
                        <Row className="d-shopcart">
                            <CartContext.Consumer>
                                {({ cartItems }) => (
                                    <Link to="/products/" >
                                        <CardImg src={imgCart} className="shop-cart"></CardImg>
                                        <span className="span-cart">({cartItems.length})</span>
                                    </Link>
                                )}
                            </CartContext.Consumer>
                        </Row>
                    </Col>
                </div>
            </div >
        )
    }
};