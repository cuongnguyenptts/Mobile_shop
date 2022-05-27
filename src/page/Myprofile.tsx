import React from "react";
import Head from "../view/header"
import Menu from "../view/menu"
import 'bootstrap/dist/css/bootstrap.min.css';
import './mypro.css'
import { Row, Col, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Input } from 'reactstrap';
import mypro from '../Image/LOgin.png'
import { Table } from "react-bootstrap";
const MyProfile: React.FC = () => {
    return (
        <div className='home'>
            <Head></Head>
            <div className="Ma">
                <Menu></Menu>
                <div className="ctner">
                    <Row>
                        <Col className="col-1"><h3 className="myh3">MyProfile</h3></Col>
                    </Row>
                    <Row>
                        <Col className="col-2">
                            <img src={mypro}></img>
                        </Col>
                        <Col className="col-3">
                            <Row className="row-1"> MR. USER
                            </Row>
                            <Row className="row-2">Email: user@gmail.com
                            </Row>
                        </Col>
                    </Row>
                    <Row className="Roww">
                        <Table borderless >
                            <thead>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="td1">Date of birth:</td>
                                    <td><Input type="date" id="start" name="trip-start"
                                        value="2022-01-01"
                                        min="200-01-01" max="2030-12-31" /></td>
                                </tr>
                                <tr>
                                    <td className="td1">Sex:</td>
                                    <td>
                                        <ButtonDropdown>
                                            <Button id="caret" color="primary">Male </Button>
                                            <DropdownToggle caret color="primary" />
                                            <DropdownMenu>
                                                <DropdownItem header>Header</DropdownItem>
                                                <DropdownItem>Female</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td1">Address Company:</td>
                                    <td className="td3">
                                        <h4>15, Duy Tan, Dich Vong Hau, Cau Giay, Ha Noi</h4></td>
                                </tr>
                                <tr>
                                    <td className="td1" >Address Home:</td>
                                    <td className="td3">
                                        <h4>15, Duy Tan, Dich Vong Hau, Cau Giay, Ha Noi</h4>
                                    </td>
                                </tr>
                            </tbody></Table>
                    </Row>
                </div>
            </div>
        </div >
    )
};
export default MyProfile;