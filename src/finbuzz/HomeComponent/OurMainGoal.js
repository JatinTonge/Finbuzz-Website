import React from "react";
import './Style.css';
import './OurMainGoal.css';

export default function OurMainGoal() {
    return (
        <>
            <div className="ourMainGoal custom-space">
                <div className="container-xl">
                    <div className="row ourMainGoal-box bg-color rounded p-md-5 p-4 mx-3">
                        <div className="col-md-6 text-white">
                            <h2 className="mb-0">Request a Schedule For Free Consultation</h2>
                        </div>
                        <div className="col-md-6 align-self-center text-md-end mt-md-0 mt-4">
                            <button className="btn btn-light px-sm-4 px-3 py-3 fw-bolder">
                                REQUEST A SCHEDUEL
                                <i className="fa-solid fa-circle-arrow-right text-color"></i>
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mb-lg-0 mb-5">
                            <div className="position-relative ourMainGoalImg">
                                <img src="./Img/ourMainGoalMImg.jpg" alt="Our main Goal" className="rounded-circle mImg" />
                                <div className="imgfloat-1">
                                    <img src="./Img/ourMainGoalMImg2.jpg" alt="Our Main Goal" className="rounded-pill" />
                                </div>
                                <div className="imgfloat-2 d-lg-inline d-none">
                                    <img src="./Img/ourMainGoalMImg3.png" alt="Our Main Goal" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div>
                                <h5 className="title py-1 px-3 mb-3 rounded">OUR MAIN GOAL</h5>
                                <h2 className="mb-3">Creating a Business with Authentic Integrity</h2>
                                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipissed do eius mod tempor incididunt
                                    ut laboret
                                    amet, Lorem ipsum amet, consectetur adipiscing se dolor sit amet</p>
                                <div className="row mb-4 row-hover justify-content-lg-start justify-content-between">
                                    <div className="col-lg-3 col-2 align-self-center">
                                        <img src="./Img/ourMainGoalIcon1.png" alt="Icon" style={{ marginRight: '32px' }} />
                                        <span className="border border-dark-subtle py-4"></span>
                                    </div>
                                    <div className="col-sm-9 col-8">
                                        <h5 className="mb-3">Strategic vision</h5>
                                        <p className="mb-0">Dorem ipsum dolor sit amet, consectetu mod tempor incididunt.</p>
                                    </div>
                                </div>
                                <div className="row row-hover justify-content-lg-start justify-content-between align-items-center">
                                    <div className="col-lg-3 col-2">
                                        <img src="./Img/ourMainGoalIcon2.png" alt="Icon" className="me-5" />
                                        <span className="border border-dark-subtle py-4"></span>
                                    </div>
                                    <div className="col-sm-9 col-8">
                                        <h5 className="mb-3">Strategic vision</h5>
                                        <p className="mb-0">Dorem ipsum dolor sit amet, consectetu mod tempor incididunt.</p>
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