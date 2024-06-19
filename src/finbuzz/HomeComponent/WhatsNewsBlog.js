import React from "react";
import './Style.css';
import './WhatsNewsBlog.css';

export default function WhatsNewsBlog() {
    return (
        <>
            <div className="whatsNewsBlog custom-space">
                <div className="container-xl">
                    <h5 className="title px-3 py-1 rounded mb-3">WHAT'S NEWS & BLOG</h5>
                    <div className="row mb-5 gy-4">
                        <div className="col-md">
                            <h2 className="fw-bold">What's New in Business Area to Know</h2>
                        </div>
                        <div className="col-md text-md-end">
                            <button className="btn btn-secondary btn-custom px-4 py-3">
                                SEE ALL POST
                                <i className="fa-solid fa-circle-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-md-6 mb-xl-0 mb-4">
                            <div className="card shadow">
                                <div className="card-body p-4">
                                    <div className="float-date overflow-hidden">
                                        <img src="./Img/whatsNews&Blog1.jpg" alt="What's News & Blog" className="w-100 card-img"/>
                                            <div className="float-date-div text-white">
                                                <i className="fa-regular fa-calendar fa-lg pe-1"></i>
                                                <span>10/07/2021</span>
                                            </div>
                                    </div>
                                    <h6 className="mt-4 mb-3">Finance, News <span>by Admin</span></h6>
                                    <h3 className="mb-4 aHover">A Business Consulting That Can Produce</h3>
                                    <a href="#" className="text-decoration-none text-secondary aHover">
                                        READ MORE
                                        <i className="fa-solid fa-circle-arrow-right text-color"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 mb-xl-0 mb-4">
                            <div className="card shadow">
                                <div className="card-body p-4">
                                    <div className="float-date overflow-hidden">
                                        <img src="./Img/whatsNews&Blog2.jpg" alt="What's News & Blog" className="w-100 card-img"/>
                                            <div className="float-date-div text-white">
                                                <i className="fa-regular fa-calendar fa-lg pe-1"></i>
                                                <span>10/07/2021</span>
                                            </div>
                                    </div>
                                    <h6 className="mt-4 mb-3">Finance, News <span>by Admin</span></h6>
                                    <h3 className="mb-4 aHover">Questions every business owner able to</h3>
                                    <a href="#" className="text-decoration-none text-secondary aHover">
                                        READ MORE
                                        <i className="fa-solid fa-circle-arrow-right text-color"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="card shadow">
                                <div className="card-body p-4">
                                    <div className="float-date overflow-hidden">
                                        <img src="./Img/whatsNews&Blog3.jpg" alt="What's News & Blog" className="w-100 card-img"/>
                                            <div className="float-date-div text-white">
                                                <i className="fa-regular fa-calendar fa-lg pe-1"></i>
                                                <span>10/07/2021</span>
                                            </div>
                                    </div>
                                    <h6 className="mt-4 mb-3">Finance, News <span>by Admin</span></h6>
                                    <h3 className="mb-4 aHover">New Consulting For All Kind Offer</h3>
                                    <a href="#" className="text-decoration-none text-secondary aHover">
                                        READ MORE
                                        <i className="fa-solid fa-circle-arrow-right text-color"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}