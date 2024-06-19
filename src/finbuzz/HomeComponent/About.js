import React from "react";
import './Style.css';
import './About.css';

export default function About() {
    return (
        <>
            <div className="about">
                <div className="container-lg about-container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 mb-5">
                            <div className="card card-hover">
                                <div className="card-body card-body-set pb-0 px-4">
                                    <div className="img1 mb-4">
                                        <img src="./Img/About Card1.png" alt="ABout"/>
                                    </div>
                                    <h3>Business Investment</h3>
                                    <p>
                                        Your logo is the very heart of your identity designers deliver the perfect.
                                    </p>
                                    <a href="#" className="text-decoration-none text-secondary aHover">
                                        Read More
                                        <i className="fa-solid fa-circle-arrow-right text-color"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5">
                            <div className="card card-hover">
                                <div className="card-body card-body-set pb-0 px-4">
                                    <div className="img2 mb-4">
                                        <img src="./Img/About Card2.png" alt="ABout"/>
                                    </div>
                                    <h3>Target Market</h3>
                                    <p>
                                        Your logo is the very heart of your identity designers deliver the perfect.
                                    </p>
                                    <a href="#" className="text-decoration-none text-secondary aHover">
                                        Read More
                                        <i className="fa-solid fa-circle-arrow-right text-color"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5">
                            <div className="card card-hover">
                                <div className="card-body card-body-set pb-0 px-4">
                                    <div className="img3 mb-4">
                                        <img src="./Img/About Card2.png" alt="ABout"/>
                                    </div>
                                    <h3>Saving Money</h3>
                                    <p>
                                        Your logo is the very heart of your identity designers deliver the perfect.
                                    </p>
                                    <a href="#" className="text-decoration-none text-secondary aHover">
                                        Read More
                                        <i className="fa-solid fa-circle-arrow-right text-color"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-xl">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-auto">
                            <div className="position-relative">
                                <img src="./Img/about2_Main.jpg" alt="ABout Main" className="w-100 about-img"/>
                                    <div className="about-img-bg d-xl-inline-block d-none">
                                        <img src="./Img/shapeBG.png" alt="ShapeBG"/>
                                    </div>
                                    <div className="about-div w-50 rounded bg-white align-items-center d-md-flex d-none">
                                        <div className="p-2 mx-3 my-4" style={{backgroundColor: 'rgb(255,235,228)'}}>
                                            <img src="./Img/about2_MainSub.png" alt="About MainSub"/>
                                        </div>
                                        <div className="pe-2">
                                            <h5>Follower Growth</h5>
                                            <div className="progress mb-1" style={{height: '8px'}}>
                                                <div className="progress-bar w-75 bg-color"></div>
                                            </div>
                                            <div className="progress" style={{height: '8px'}}>
                                                <div className="progress-bar w-50 bg-color"></div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-12 mt-xl-0 mt-5">
                            <div className="about-main bg-white">
                                <h5 className="title text-center rounded about-title-w py-1 px-3 mb-3">ABOUT US</h5>
                                <h2>We Help Our Clients to Achieve Their Business Goal</h2>
                                <p className="mb-4">
                                    Finance can only be as strong as our people our team agenh ave run their businesses.Our
                                    agency can
                                    only be as stro people our team areafolloe people.
                                </p>
                                <div className="row">
                                    <div className="col-12 col-md">
                                        <img src="./Img/About2_Sub.jpg" alt="About Sub" className="img-w w-100 shadow me-2"/>
                                            <span className="border border-dark-subtle py-5 d-none d-xl-inline"></span>
                                    </div>
                                    <div className="col fw-bold mt-md-0 mt-4 me-4 align-self-center">
                                        <p>
                                            <i className="fa-solid fa-circle-check fa-lg" style={{color: '#fa360a'}}></i>
                                            Business is the best plan
                                        </p>
                                        <p>
                                            <i className="fa-solid fa-circle-check fa-lg" style={{color: '#fa360a'}}></i>
                                            How to improve business
                                        </p>
                                        <p>
                                            <i className="fa-solid fa-circle-check fa-lg" style={{color: '#fa360a'}}></i>
                                            Services we provide
                                        </p>
                                    </div>
                                </div>
                                <p className="mt-4 mb-4">
                                    Finance can only be as strong as our people our team agenh ave run their businesses.Our
                                    agency can
                                    only be as stro people our team areafolloe people
                                </p>
                                <div className="row">
                                    <div className="col-md">
                                        <div className="row">
                                            <div className="col-md-3 col-auto">
                                                <img src="./Img/about2_Profile.jpg" alt="About Profile" className="rounded-circle"/>
                                            </div>
                                            <div className="col-9 align-self-center ps-4">
                                                <h5 className="mb-0">Mr. Robert Smith</h5>
                                                <p className="mb-0">CEO & Founder</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md mt-md-0 mt-4 align-self-center">
                                        <span className="border border-dark-subtle py-3 d-none d-md-inline"></span>
                                        <img src="./Img/about2_Sign.png" alt="About Sign" className="ps-md-4 ps-0"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}