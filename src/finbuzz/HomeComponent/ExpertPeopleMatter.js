import React from "react";
import './Style.css';
import './ExpertPeopleMatter.css';

export default function ExpertPeopleMatter() {
    return (
        <>
            <div className="expertPeopleMatter custom-space">
                <div className="container-lg">
                    <h5 className="title px-3 py-1 rounded mb-3">EXPERT PEOPLE MATTER</h5>
                    <div className="row mb-4 gy-4">
                        <div className="col-md">
                            <h2 className="">We Have Energatic Team For Organization</h2>
                        </div>
                        <div className="col-md text-md-end">
                            <button className="btn btn-secondary btn-custom px-4 py-3">
                                SEE ALL MEMBERS
                                <i className="fa-solid fa-circle-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6 gy-3">
                            <div className="share-hover">
                                <div className="share-position overflow-hidden">
                                    <img src="./Img/expertPeopleMatter.jpg" alt="Expert People Matter" className="w-100" />
                                    <div className="share d-flex justify-content-center align-items-center">
                                        <i className="fa-solid fa-share-nodes fa-2xl text-white"></i>
                                    </div>
                                    <div className="share-list">
                                        <li><a href="#"><i className="fa-brands fa-facebook-f fa-lg text-white"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-twitter fa-lg text-white"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-linkedin-in fa-xl text-white"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-instagram fa-lg text-white"></i></a></li>
                                    </div>
                                </div>
                                <h4 className="mb-1 mt-3 text-center">Robert Gerry</h4>
                                <div className="horizontal-divider">
                                    <p className="pb-3 text-center">Marketing Specialist</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 gy-3">
                            <div className="share-hover">
                                <div className="share-position overflow-hidden">
                                    <img src="./Img/expertPeopleMatter2.jpg" alt="Expert People Matter" className="w-100" />
                                    <div className="share d-flex justify-content-center align-items-center">
                                        <i className="fa-solid fa-share-nodes fa-2xl text-white"></i>
                                    </div>
                                    <div className="share-list">
                                        <li><a href="#"><i className="fa-brands fa-facebook-f fa-lg text-white"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-twitter fa-lg text-white"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-linkedin-in fa-xl text-white"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-instagram fa-lg text-white"></i></a></li>
                                    </div>
                                </div>
                                <h4 className="mb-1 mt-3 text-center">Mrs Amelia</h4>
                                <div className="horizontal-divider">
                                    <p className="pb-3 text-center">Assistant Manager</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 gy-3">
                            <div className="share-hover">
                                <div className="share-position overflow-hidden">
                                    <img src="./Img/expertPeopleMatter3.jpg" alt="Expert People Matter" className="w-100" />
                                    <div className="share d-flex justify-content-center align-items-center">
                                        <i className="fa-solid fa-share-nodes fa-2xl text-white"></i>
                                    </div>
                                    <div className="share-list">
                                        <li><a href="#"><i className="fa-brands fa-facebook-f fa-lg text-white"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-twitter fa-lg text-white"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-linkedin-in fa-xl text-white"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-instagram fa-lg text-white"></i></a></li>
                                    </div>
                                </div>
                                <h4 className="mb-1 mt-3 text-center">Mr James</h4>
                                <div className="horizontal-divider">
                                    <p className="pb-3 text-center">Marketing Specialist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}