import React, { Component } from "react";
// import './Home.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <p>Home</p>
                <nav>
                    <Link to="/">
                        LoginPage
                    </Link>
                </nav>
            </div>
        );
    }
}

export default Home;