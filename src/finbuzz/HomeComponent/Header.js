import React from "react";
import './Header.css';
import './Style.css';

export default function Header() {
    return (
        <>
            <header>
                <div className="topbar">
                    <div className="container-fluid d-lg-flex justify-content-between h-100 d-none">
                        <div className="topbar-left d-flex align-items-center text-white h-100">
                            <p className="mb-0 me-4">
                                <i className="fa-solid fa-location-dot p-1" style={{ color: '#ffffff' }}></i>
                                120 F 2th Yt, Melbone NY 1259
                            </p>
                            <div className="divider me-4"></div>
                            <p className="mb-0">
                                <a href="mailto:email@example.com" className="text-decoration-none text-white">
                                    <i className="fa-regular fa-envelope p-1" style={{ color: '#ffffff' }}></i>
                                    email@example.com
                                </a>
                            </p>
                        </div>
                        <div className="topbar-right d-flex align-items-center text-white h-100">
                            <p className="mb-0 me-4">
                                <i className="fa-solid fa-phone p-1" style={{ color: '#ffffff' }}></i>
                                Hotline Number:210-9856988
                            </p>
                            <div className="divider me-4"></div>
                            <p className="mb-0">
                                <i className="fa-brands fa-facebook-f ps-2 pe-2" style={{ color: '#ffffff' }}></i>
                                <i className="fa-brands fa-twitter pe-2" style={{ color: '#ffffff' }}></i>
                                <i className="fa-brands fa-google-plus pe-2" style={{ color: '#ffffff' }}></i>
                                <i className="fa-brands fa-linkedin-in pe-2" style={{ color: '#ffffff' }}></i>
                                <i className="fa-brands fa-pinterest-p pe-2" style={{ color: '#ffffff' }}></i>
                            </p>
                        </div>
                    </div>
                    <div className="topbar-center d-lg-none d-flex justify-content-center align-items-center h-100">
                        <p className="mb-0 pe-3" style={{ color: '#64647D' }}>
                            <i className="fa-solid fa-phone p-1" style={{ color: '#64647D' }}></i>
                            210-9856988
                        </p>
                        <button className="btn btn-secondary btn-custom"> Get Consulting</button>
                    </div>
                </div>
            </header>
        </>
    )
}