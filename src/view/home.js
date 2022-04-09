import React, { props } from "react";
import Head from "./header"
import Menu from "./menu"
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import { Container, Row, Col } from 'reactstrap';
import InputGroup from 'react-bootstrap/InputGroup'
import { FormControl, Button } from "react-bootstrap";
import Search from '../Image/search.png';
import Loc from '../Image/loc.png'
export default class Home extends React.Component {
    render() {
        return (
            <div className='home'>
                <Head></Head>
                <div className="Ma">
                    <Menu></Menu>
                    <Container className="container">
                        <Row className="Row">
                            <Row className="row-shop-1">
                                Shop
                            </Row>
                            <Col>
                                <Row className="row-shop-2">
                                    Shop
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div >
        )
    }
};