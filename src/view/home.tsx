import React from "react";
import Header from "./header";
import Menu from "./menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import { Row, Col } from 'reactstrap';

const Home: React.FC = () => {
    return (
        <div className='home'>
            <Header></Header>
            <div className="Ma">
                <Menu></Menu>
                <div className="ctner">
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
                </div>
            </div>
        </div >
    )

};
export default Home;