import React from "react";
import { Link } from "react-router-dom";
import "./assets/style.css";
import logo from '../logo.svg';

function Navbar(){
    return(
        <div className="position-relative">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                <a href="/" className="navbar-brand">
                    <img src={logo} width={30} height={30}/>
                </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="nav navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/books" className="nav-link">
                                    Books
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/profiles" className="nav-link">
                                    Profile
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;