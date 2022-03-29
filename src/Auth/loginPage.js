import React, { Component } from "react";
import "./login.css"
import logo from "../Image/logo1.png";
import userimg from "../Image/logo-user.png"
import logo2 from "../Image/273474806_523935232515257_9211143483674993718_n.png"
import imgpass from "../Image/logo-password.png"
import hideimg from "../Image/logo-invisible.png"
import { Form, Button, Label, FormGroup, Input, } from "reactstrap";
import { Link } from "react-router-dom";

class LoginPage extends Component {
    render() {
        return (
            <div className="background" >
                <div className="">
                    <div className="logo">
                        <img src={logo} className="image" />;
                    </div>
                    <Form className="login-container">
                        <FormGroup>
                            <div className="ad1"><img className="ad" src={userimg}></img></div>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="Tên đăng nhập"
                                type="email"
                            />
                        </FormGroup>
                        <FormGroup>
                            <div> <image className="pa" src={imgpass}></image></div>
                            <Input
                                id="examplePassword"
                                name="password"
                                placeholder="Mật khẩu "
                                type="password"
                            />
                            <image src={hideimg}></image>
                        </FormGroup>
                        < FormGroup check className="div_lef">
                            <Input type="checkbox" />
                            {' '}
                            <Label check>
                                Lưu mật khẩu
                            </Label>
                        </FormGroup>
                        <div className="div_rigt">
                            <a href="">Bạn quên mật khẩu?</a>
                        </div>
                        <div className="btn-submit">
                            <nav>
                                <Link to="/home">
                                    <Button>
                                        Đăng Nhập
                                    </Button>
                                </Link>
                            </nav>
                        </div>
                    </Form>
                    <div className="nar">
                        <p>Nếu bạn có thắc mắc hay cần giải đáp, vui lòng liên hệ số điện thoại: 19001000</p>
                        <p className="p2">Bản quyền thuộc về AnyBim</p>
                    </div>
                    <div className="logo2">
                        <img src={logo2}></img>
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginPage;