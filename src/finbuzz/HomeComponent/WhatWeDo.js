import React from "react";
import './Style.css';
import './WhatWeDo.css';

export default function WhatWeDo() {
    return (
        <>
            <div className="whatWeDo custom-space">
                <div className="container-lg">
                    <h5 className="title py-1 px-3 mb-3 rounded">WHAT WE DO</h5>
                    <div className="row mb-4">
                        <div className="col-md-6 mb-4 mb-md-2">
                            <h2>What Services we Provide for Our Customers Business</h2>
                        </div>
                        <div className="col-md-6">
                            <p>Our agency can only be as strong as our people our team follwing agenhave run their businesses
                                designed.</p>
                        </div>
                    </div>
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
                            <div className="card whatWeDo-card-hover shadow">
                                <div className="card-body">
                                    <div className="whatWeDo-card-img overflow-hidden">
                                        <img src="Img/whatWeDo1.jpg" alt="What We Do" className="card-img w-100" />
                                    </div>
                                    <div className="p-4 position-relative">
                                        <h3 className="mt-5">Business Audit</h3>
                                        <p className="mt-3 mb-3">Investment Planning Working with thousands of business companies
                                            around</p>
                                        <a href="#" className="text-decoration-none text-secondary aHover">
                                            Read More
                                            <i className="fa-solid fa-circle-arrow-right text-color"></i>
                                        </a>
                                        <div className="float-img">
                                            <img src="Img/whatWeDoIcon1.svg" alt="WhatWeDo Icon" className="w-100" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
                            <div className="card whatWeDo-card-hover shadow">
                                <div className="card-body">
                                    <div className="whatWeDo-card-img overflow-hidden">
                                        <img src="Img/whatWeDo2.jpg" alt="What We Do" className="card-img w-100" />
                                    </div>
                                    <div className="p-4 position-relative">
                                        <h3 className="mt-5">Saving Money</h3>
                                        <p className="mt-3 mb-3">Investment Planning Working with thousands of business companies
                                            around
                                        </p>
                                        <a href="#" className="text-decoration-none text-secondary aHover">
                                            Read More
                                            <i className="fa-solid fa-circle-arrow-right text-color"></i>
                                        </a>
                                        <div className="float-img">
                                            <img src="Img/whatWeDoIcon2.svg" alt="WhatWeDo Icon" className="w-100" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-lg-0 mb-4">
                            <div className="card whatWeDo-card-hover shadow">
                                <div className="card-body">
                                    <div className="whatWeDo-card-img overflow-hidden">
                                        <img src="Img/whatWeDo3.jpg" alt="What We Do" className="card-img w-100" />
                                    </div>
                                    <div className="p-4 position-relative">
                                        <h3 className="mt-5">HR Consulting</h3>
                                        <p className="mt-3 mb-3">Investment Planning Working with thousands of business companies
                                            around
                                        </p>
                                        <a href="#" className="text-decoration-none text-secondary aHover">
                                            Read More
                                            <i className="fa-solid fa-circle-arrow-right text-color"></i>
                                        </a>
                                        <div className="float-img">
                                            <img src="Img/whatWeDoIcon3.svg" alt="WhatWeDo Icon" className="w-100" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-center fw-bold mb-0">
                        You Can Also <span className="text-color">See All Business</span> Services
                    </p>
                </div>
            </div>
        </>
    )
}