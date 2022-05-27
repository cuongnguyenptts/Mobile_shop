import React from "react";
import Header from "../view/header";
import Menu from "../view/menu";
import { Container, Row, Col } from "reactstrap";
import '../page/cart.css';
import { useAppSelector } from "../redux/hook";
import { selectProduct, selectQuantity, selectSubTotal } from "../redux/productSlice";
import ItemCart from './cartItem';


const Cart: React.FC = () => {

    const itemCart = useAppSelector(selectProduct)
    const SubTotal = useAppSelector(selectSubTotal)
    const quantity = useAppSelector(selectQuantity)
    const Tex = SubTotal * 10 / 100;
    const Total = SubTotal - Tex;
    return (
        <div className="Cart">
            <Header></Header>
            <div className="body-Cart">
                <Menu></Menu>
                <div className="content-Cart">
                    <div className="header-Cart">
                        <Row className="title-cart-row">
                            <Col className="title-cart-col">
                                Cart
                            </Col>
                        </Row>
                        <Row className="header-cart-row">
                            <Col className="icon-cart">
                                <p> {quantity} Items in bag </p>
                            </Col>
                        </Row>
                    </div>
                    <div className="data-cart">
                        <div>
                            {itemCart.map((item) => {
                                return (
                                    <ItemCart
                                        id={item.id}
                                        img={item.img}
                                        name={item.name}
                                        price={item.price}
                                        description={item.description}
                                        quantity={item.quantity}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <Row className="row-quantity">
                            <div className="subtotal"> SubTotal: {SubTotal} VND </div>
                            <div className="tex"> Tex: {Tex} VND </div>
                            <div className="total"> Total: {Total} VND </div>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;