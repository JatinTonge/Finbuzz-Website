import React from "react";
import './Navbar.css';
import './Style.css';
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className="navbar navbar-custom navbar-expand-lg sticky-top">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">
                        <img src="Img/logo-dark.svg" alt="Logo" />
                    </a>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse bg-white" id="nav">
                        <ul className="navbar-nav ms-auto ps-2 ps-lg-0">
                            <li className="nav-item dropdown">
                                <NavLink to='/' className="nav-link fw-bold text-dark pe-2 pe-xl-4 dropdown-toggle"
                                    data-bs-toggle="dropdown">
                                    Home
                                </NavLink>
                                <ul className="dropdown-menu" data-bs-offest="80,80" style={{ width: '300px' }}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-6">
                                                <li><a href="#" className="dropdown-item fsize fw-bold">Column 01</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Home 01</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Home 02</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Home 03</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Home 04</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Home 05</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Home 06</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Home 07</a></li>
                                            </div>
                                            <div className="col-6">
                                                <li><a href="#" className="dropdown-item fsize fw-bold">Column 02</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Home 08</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Home 09</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Home 10</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Home 11</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Home 12</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Home 13</a></li>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="navbar-item dropdown">
                                <NavLink to='/page' className="nav-link fw-bold text-dark pe-2 pe-xl-4 dropdown-toggle"
                                    data-bs-toggle="dropdown">
                                    Pages
                                </NavLink>
                                <ul className="dropdown-menu" style={{ width: '700px' }}>
                                    <div className="container-md">
                                        <div className="row gy-4">
                                            <div className="col-md-3">
                                                <li><a href="#" className="dropdown-item fsize fw-bold">Page</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Portfolio Page 1</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Portfolio Page 2</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Portfolio Page 3</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Portfolio Page 4</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Portfolio Page 5</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Portfolio Page 6</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Portfolio Page 7</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Portfolio Page 8</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Single Portfolio</a></li>
                                            </div>
                                            <div className="col-md-3">
                                                <li><a href="#" className="dropdown-item fsize fw-bold">Page</a></li>
                                                <li><a href="#" className="dropdown-item fsize">pricing Table 01</a></li>
                                                <li><a href="#" className="dropdown-item fsize">pricing Table 02</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Country Location page</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Brand Logo Page 11</a></li>
                                                <li><a href="#" className="dropdown-item fsize">About Us Page</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Testiomonial Page</a></li>
                                                <li><a href="#" className="dropdown-item fsize">404 Page</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Faq Page</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Typography page</a></li>
                                            </div>
                                            <div className="col-md-3">
                                                <li><a href="#" className="dropdown-item fsize fw-bold">Page</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Team Page 01</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Team Page 02</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Team Page 03</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Team Page 04</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Team Page 05</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Team Page 06</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Single Team page 07</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Contact Page</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Post Grid Addon</a></li>
                                            </div>
                                            <div className="col-md-3">
                                                <li><a href="#" className="dropdown-item fsize fw-bold">Page</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Testimonial Page 01</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Testimonial Page 02</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Testimonial Page 03</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Testimonial Page 04</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Testimonial Page 05</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Testimonial Page 06</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Gallery Page 01</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Gallery Page 02</a></li>
                                                <li><a href="#" className="dropdown-item fsize">gallery Single Page</a></li>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="navbar-item dropdown">
                                <NavLink to='/service' className="nav-link fw-bold text-dark pe-2 pe-xl-4 dropdown-toggle"
                                    data-bs-toggle="dropdown">
                                    Services
                                </NavLink>
                                <ul className="dropdown-menu" style={{ width: '300px' }}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-6">
                                                <li><a href="#" className="dropdown-item fsize fw-bold">Column 01</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Service 01</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Service 02</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Service 03</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Service 04</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Service 05</a></li>
                                            </div>
                                            <div className="col-6">
                                                <li><a href="#" className="dropdown-item fsize fw-bold">Column 02</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Service 06</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Service 07</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Service 08</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Singel Service 1</a></li>
                                                <li><a href="#" className="dropdown-item fsize">Single Archive</a></li>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="navbar-item dropdown">
                                <NavLink to='/shop' className="nav-link fw-bold text-dark pe-2 pe-xl-4 dropdown-toggle"
                                    data-bs-toggle="dropdown">
                                    Shop
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><a href="#" className="dropdown-item fsize">Shop</a></li>
                                    <li><a href="#" className="dropdown-item fsize">Shop Details</a></li>
                                    <li><a href="#" className="dropdown-item fsize">Checkout</a></li>
                                    <li><a href="#" className="dropdown-item fsize">Wishlist</a></li>
                                    <li><a href="#" className="dropdown-item fsize">Cart</a></li>
                                    <li><a href="#" className="dropdown-item fsize">My Account</a></li>
                                </ul>
                            </li>
                            <li className="navbar-item dropdown">
                                <NavLink to='/blog' className="nav-link fw-bold text-dark pe-2 pe-xl-4 dropdown-toggle"
                                    data-bs-toggle="dropdown">
                                    Blog
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item fsize" href="#">Blog1</a></li>
                                    <li><a className="dropdown-item fsize" href="#">Blog2</a></li>
                                    <li><a className="dropdown-item fsize" href="#">Blog Single</a></li>
                                </ul>
                            </li>
                            <li className="navbar-item dropdown">
                                <NavLink to='/element' className="nav-link fw-bold text-dark pe-2 pe-xl-4 dropdown-toggle"
                                    data-bs-toggle="dropdown">
                                    Elements
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><a href="#" className="dropdown-item fsize">Miscellaneous</a></li>
                                    <li><a href="#" className="dropdown-item fsize">Team Addon</a></li>
                                    <li><a href="#" className="dropdown-item fsize">Tetimoinal Addon</a></li>
                                    <li><a href="#" className="dropdown-item fsize">Service Addon</a></li>
                                    <li><a href="#" className="dropdown-item fsize">Team Members</a></li>
                                    <li><a href="#" className="dropdown-item fsize">Gallery Addon</a></li>
                                    <li><a href="#" className="dropdown-item fsize">Portfolio Addon</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="navbar-search d-none d-lg-block">
                            <span className="navbar-divider"></span>
                            <i className="fa-solid fa-magnifying-glass fa-lg ps-3" style={{ color: 'rgb(129,129,129)' }}></i>
                            <i className="fa-solid fa-cart-shopping fa-lg ps-3" style={{ color: 'rgb(129,129,129)' }}></i>
                            <button className="btn btn-secondary btn-custom px-3 py-2 ms-3 fw-bold">
                                <i className="fa-regular fa-message fa-lg pe-1" style={{ color: '#ffffff' }}></i>
                                GET CONSULTING
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}