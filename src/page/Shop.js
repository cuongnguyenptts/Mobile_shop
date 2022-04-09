import React, { props } from "react";
import Head from "../view/header"
import Menu from "../view/menu"
import 'bootstrap/dist/css/bootstrap.min.css';
import './mypro.css'
import { Container, Row, Col, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Input } from 'reactstrap';
import mypro from '../Image/LOgin.png'
import { Table } from "react-bootstrap";
export default class Shop extends React.Component {
    render() {
        return (
            <div className='home'>
                <Head></Head>
                <div className="Ma">
                    <Menu></Menu>
                    <Container className="container">
                        <Row>
                            <Row className="row-shop-1">
                                Shop
                            </Row>
                            <Row className="row-shop-2">
                            </Row>
                        </Row></Container>
                    <Col className="search">
                        <Row className="row-s"></Row>
                        <Row>
                            <Col>
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
                            </Col>
                            <Col>
                                <Button variant="outline-secondary" id="button-addon3">
                                    <img className="search" src={Loc}></img>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </div>
            </div>
}