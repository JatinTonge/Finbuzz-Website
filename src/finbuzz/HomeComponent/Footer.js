import React from "react";
import './Style.css';
import './Footer.css';

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="border-bottom border-1 footer-color py-5 position-relative z-1">
                        <div className="row  text-white gy-5 gx-5">
                            <div className="col-lg-3 col-md-6">
                                <div className="logo-links">
                                    <img src="./Img/logo-light.svg" alt=" Logo"/>
                                        <p className="mt-4 mb-4 footer-color">
                                            Finbuzz amet sit amet, consectetur adipise cingt sed doeiusmod tempor incididuntue
                                            labore et dolore magna.
                                        </p>
                                        <a href="#" className=""><i className="fa-brands fa-facebook-f"></i></a>
                                        <a href="#" className=""><i className="fa-brands fa-twitter"></i></a>
                                        <a href="#" className=""><i className="fa-brands fa-google-plus"></i></a>
                                        <a href="#" className=""><i className="fa-brands fa-linkedin-in"></i></a>
                                        <a href="#" className=""><i className="fa-brands fa-pinterest-p"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="quickLinks">
                                    <h4 className="fw-bold">Quick Links</h4>
                                    <div className="d-flex">
                                        <hr className="border-4 text-color opacity-100 rounded  me-1" style={{width: '15px'}}/>
                                            <hr className="border-4 text-color opacity-100 rounded" style={{width: '40px'}}/>
                                            </div>
                                            <li className="list-unstyled mb-3">
                                                <a href="#" className="fw-bold text-decoration-none footer-color">
                                                    <i className="fa-solid fa-greater-than fa-xs"></i>
                                                    Home
                                                </a>
                                            </li>
                                            <li className="list-unstyled mb-3">
                                                <a href="#" className="fw-bold text-decoration-none footer-color">
                                                    <i className="fa-solid fa-greater-than fa-xs"></i>
                                                    About
                                                </a>
                                            </li>
                                            <li className="list-unstyled mb-3">
                                                <a href="#" className="fw-bold text-decoration-none footer-color">
                                                    <i className="fa-solid fa-greater-than fa-xs"></i>
                                                    Gallery
                                                </a>
                                            </li>
                                            <li className="list-unstyled mb-3">
                                                <a href="#" className="fw-bold text-decoration-none footer-color">
                                                    <i className="fa-solid fa-greater-than fa-xs"></i>
                                                    Portfolio
                                                </a>
                                            </li>
                                            <li className="list-unstyled mb-3">
                                                <a href="#" className="fw-bold text-decoration-none footer-color">
                                                    <i className="fa-solid fa-greater-than fa-xs"></i>
                                                    Service
                                                </a>
                                            </li>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div>
                                        <h4 className="fw-bold">Gallery</h4>
                                        <div className="d-flex">
                                            <hr className="border-4 text-color opacity-100 rounded  me-1" style={{width: '15px'}}/>
                                                <hr className="border-4 text-color opacity-100 rounded" style={{width: '40px'}}/>
                                                </div>
                                                <div className="row gx-2 gy-2">
                                                    <div className="col-4">
                                                        <img src="./Img/footerImg1.jpg" alt="Footer Img Gallery" className="w-100 rounded"/>
                                                    </div>
                                                    <div className="col-4">
                                                        <img src="./Img/footerImg2.jpg" alt="Footer Img Gallery" className="w-100 rounded"/>
                                                    </div>
                                                    <div className="col-4">
                                                        <img src="./Img/footerImg3.jpg" alt="Footer Img Gallery" className="w-100 rounded"/>
                                                    </div>
                                                    <div className="col-4">
                                                        <img src="./Img/footerImg4.jpg" alt="Footer Img Gallery" className="w-100 rounded"/>
                                                    </div>
                                                    <div className="col-4">
                                                        <img src="./Img/footerImg5.jpg" alt="Footer Img Gallery" className="w-100 rounded"/>
                                                    </div>
                                                    <div className="col-4">
                                                        <img src="./Img/footerImg6.jpg" alt="Footer Img Gallery" className="w-100 rounded"/>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div>
                                            <h4 className="fw-bold">Contact</h4>
                                        </div>
                                        <div className="d-flex">
                                            <hr className="border-4 text-color opacity-100 rounded  me-1" style={{width: '15px'}}/>
                                                <hr className="border-4 text-color opacity-100 rounded" style={{width: '40px'}}/>
                                                </div>
                                                <p className="footer-color">
                                                    <i className="fa-solid fa-location-dot pe-1"></i>
                                                    121 King St, Melbourne den 3000, Australia
                                                </p>
                                                <p className="footer-color">
                                                    <i className="fa-solid fa-phone pe-1"></i>
                                                    (+123)-596-000
                                                </p>
                                                <p className="footer-color">
                                                    <i className="fa-regular fa-envelope pe-1"></i>
                                                    info@example.com
                                                </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="position-relative z-1">
                                    <p className="text-center py-5 footer-color">© 2023 Finbuzz. All Rights Reserved By Jatin Tonge</p>
                                </div>
                            </div>
                        </footer>
                    </>
                    )
}