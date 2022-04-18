import React, { props } from "react";
import Head from "./header"
import Menu from "./menu"
import 'bootstrap/dist/css/bootstrap.min.css';
import './shop.css'
import { CardText, CardTitle, CardImg } from "reactstrap";
import { Container, Row, Col } from 'reactstrap';
import InputGroup from 'react-bootstrap/InputGroup'
import { FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Search from '../Image/search.png';
import Loc from '../Image/loc.png'
import data from "./data";
export default class Home extends React.Component {
    render() {
        return (
            <div className='home'>
                <Head></Head>
                <div className="Ma">
                    <Menu></Menu>
                    <Container className="container">
                        <Row className="Row">
                            <Col sm={9}>
                                <Row className="row-shop-1">
                                    Shop
                                </Row>
                                <Row className="row-shop-2">
                                    Shop
                                </Row>
                            </Col>
                            <Col sm={3}>
                                <Row className="row-up"></Row>
                                <Row>
                                    <div className="div-search">
                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="search"
                                                aria-label="seach"
                                                aria-describedby="basic-addon2"
                                            />
                                            <Button variant="outline-secondary" id="button-addon2">
                                                <img className="search" src={Search}></img>
                                            </Button>
                                        </InputGroup>
                                    </div>
                                </Row>
                            </Col>
                        </Row>

                        <Row>
                            <div className="data-shop">
                                <Row>
                                    <Col>
                                        {data.productData.map((item, index) => {
                                            return (
                                                <Col sm={5} className='product'>
                                                    <Col sm={3} className="img">
                                                        <CardImg
                                                            className="img-product"
                                                            src={item.img}
                                                        />

                                                    </Col>
                                                    <Col sm={9} className='info-product'>
                                                        <CardTitle className="title-product">
                                                            <Link to='/products/' className="link">
                                                                {item.name}
                                                            </Link>
                                                        </CardTitle>
                                                        <CardText className="price-product">
                                                            {item.price}
                                                        </CardText>
                                                        <CardImg
                                                            className="star-product"
                                                            src={item.star}
                                                        />
                                                    </Col>
                                                </Col>
                                            )
                                        })}
                                    </Col>
                                    <Col>
                                        {data.productData.map((item, index) => {
                                            return (
                                                <Col sm={5} className='product'>
                                                    <Col sm={3} className="img">
                                                        <CardImg
                                                            className="img-product"
                                                            src={item.img}
                                                        />

                                                    </Col>
                                                    <Col sm={9} className='info-product'>
                                                        <CardTitle className="title-product">
                                                            <Link to='/products/' className="link">
                                                                {item.name}
                                                            </Link>
                                                        </CardTitle>
                                                        <CardText className="price-product">
                                                            {item.price}
                                                        </CardText>
                                                        <CardImg
                                                            className="star-product"
                                                            src={item.star}
                                                        />
                                                    </Col>
                                                </Col>
                                            )
                                        })}
                                    </Col>
                                </Row>
                            </div>
                        </Row>
                        <Row>
                            <div className="data-shop">
                                <Row>
                                    <Col>
                                        {data.productData.map((item, index) => {
                                            return (
                                                <Col sm={5} className='product'>
                                                    <Col sm={3} className="img">
                                                        <CardImg
                                                            className="img-product"
                                                            src={item.img}
                                                        />

                                                    </Col>
                                                    <Col sm={9} className='info-product'>
                                                        <CardTitle className="title-product">
                                                            <Link to='/products/' className="link">
                                                                {item.name}
                                                            </Link>
                                                        </CardTitle>
                                                        <CardText className="price-product">
                                                            {item.price}
                                                        </CardText>
                                                        <CardImg
                                                            className="star-product"
                                                            src={item.star}
                                                        />
                                                    </Col>
                                                </Col>
                                            )
                                        })}
                                    </Col>
                                    <Col>
                                        {data.productData.map((item, index) => {
                                            return (
                                                <Col sm={5} className='product'>
                                                    <Col sm={3} className="img">
                                                        <CardImg
                                                            className="img-product"
                                                            src={item.img}
                                                        />

                                                    </Col>
                                                    <Col sm={9} className='info-product'>
                                                        <CardTitle className="title-product">
                                                            <Link to='/products/' className="link">
                                                                {item.name}
                                                            </Link>
                                                        </CardTitle>
                                                        <CardText className="price-product">
                                                            {item.price}
                                                        </CardText>
                                                        <CardImg
                                                            className="star-product"
                                                            src={item.star}
                                                        />
                                                    </Col>
                                                </Col>
                                            )
                                        })}
                                    </Col>
                                </Row>
                            </div>
                        </Row>
                        <Row>
                            <div className="data-shop">
                                <Row>
                                    <Col>
                                        {data.productData.map((item, index) => {
                                            return (
                                                <Col sm={5} className='product'>
                                                    <Col sm={3} className="img">
                                                        <CardImg
                                                            className="img-product"
                                                            src={item.img}
                                                        />

                                                    </Col>
                                                    <Col sm={9} className='info-product'>
                                                        <CardTitle className="title-product">
                                                            <Link to='/products/' className="link">
                                                                {item.name}
                                                            </Link>
                                                        </CardTitle>
                                                        <CardText className="price-product">
                                                            {item.price}
                                                        </CardText>
                                                        <CardImg
                                                            className="star-product"
                                                            src={item.star}
                                                        />
                                                    </Col>
                                                </Col>
                                            )
                                        })}
                                    </Col>
                                    <Col>
                                        {data.productData.map((item, index) => {
                                            return (
                                                <Col sm={5} className='product'>
                                                    <Col sm={3} className="img">
                                                        <CardImg
                                                            className="img-product"
                                                            src={item.img}
                                                        />

                                                    </Col>
                                                    <Col sm={9} className='info-product'>
                                                        <CardTitle className="title-product">
                                                            <Link to='/products/' className="link">
                                                                {item.name}
                                                            </Link>
                                                        </CardTitle>
                                                        <CardText className="price-product">
                                                            {item.price}
                                                        </CardText>
                                                        <CardImg
                                                            className="star-product"
                                                            src={item.star}
                                                        />
                                                    </Col>
                                                </Col>
                                            )
                                        })}
                                    </Col>
                                </Row>
                            </div>
                        </Row>
                    </Container>
                    <Col className="col-loc">
                        <Row className="row-up"></Row>
                        <Row className="row-loc">
                            <Button variant="outline-secondary" id="button-addon3">
                                <img className="search" src={Loc}></img>
                            </Button>
                        </Row>
                    </Col>
                </div>
            </div >
        )
    }
};