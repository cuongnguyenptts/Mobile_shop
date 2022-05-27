import React from "react";
import "./login.css"
import logo from "../Image/logo1.png";
import userimg from "../Image/logo-user.png"
import logo2 from "../Image/273474806_523935232515257_9211143483674993718_n.png"
import imgpass from "../Image/logo-password.png"
import hideimg from "../Image/logo-invisible.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Label, FormGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
    return (
        <>
            <div className="background" >
                <div className="">
                    <div className="logo">
                        <img src={logo} className="image" />;
                    </div>
                    <Form className="login-container">
                        <FormGroup>
                            <div>
                                <img className="ad " src={userimg}></img></div>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="Tên đăng nhập"
                                type="email"
                            />
                        </FormGroup>
                        <FormGroup>
                            <div>
                                <img src={imgpass} className="aa1" />;</div>
                            <Input
                                id="examplePassword"
                                name="password"
                                placeholder="Mật khẩu "
                                type="password"
                            />
                            <div className="d-hide">
                                <img className="hide" src={hideimg}></img>;
                            </div>
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
                                    <Button className="btn-login">
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
        </>
    )
}
export default Login;