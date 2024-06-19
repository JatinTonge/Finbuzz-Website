import React from "react";
import './Style.css';
import './RecentCaseStudies.css';

export default function RecentCaseStudies() {
    return (
        <>
            <div className="recentCaseStudies custom-space">
                <div className="container-xl">
                    <h5 className="title px-3 py-1 mb-3 rounded">RECENT CASE STUDIES</h5>
                    <div className="row">
                        <div className="col-md-6">
                            <h2>We Are Specialist For Many Consulting Cases</h2>
                        </div>
                        <div className="col-md-6">
                            <p>Our agency can only be as strong as our people our team follwing agenhave run their businesses
                                designed</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row gx-2 mt-5">
                        <div className="col mediaQ-div box-hover">
                            <div className="position-relative bg-img">
                                <img src="./Img/recentCaseStudies1.jpg" alt="Image" className="w-100" />
                                <div className="float-div px-3 py-3 bg-light border rounded-end-5">
                                    <p className="mb-0">Business Strategy</p>
                                    <h5 className="mb-0">Our Business Growth</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col d-none d-md-inline-block box-hover">
                            <div className="position-relative">
                                <img src="./Img/recentCaseStudies2.jpg" alt="Image" className="w-100" />
                                <div className="float-div px-3 py-3 bg-light border rounded-end-5">
                                    <p className="mb-0">Business Strategy</p>
                                    <h5 className="mb-0">Our Business Growth</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col d-none d-lg-inline-block box-hover">
                            <div className="position-relative">
                                <img src="./Img/recentCaseStudies3.jpg" alt="Image" className="w-100" />
                                <div className="float-div px-3 py-3 bg-light rounded-end-5">
                                    <p className="mb-0">Business Strategy</p>
                                    <h5 className="mb-0">Our Business Growth</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col d-none d-xl-inline-block box-hover">
                            <div className="position-relative">
                                <img src="./Img/recentCaseStudies4.jpg" alt="Image" className="w-100" />
                                <div className="float-div px-3 py-3 bg-light border rounded-end-5">
                                    <p className="mb-0">Business Strategy</p>
                                    <h5 className="mb-0">Our Business Growth</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col d-none d-xl-inline-block box-hover">
                            <div className="position-relative">
                                <img src="./Img/recentCaseStudies5.jpg" alt="Image" className="w-100" />
                                <div className="float-div px-3 py-3 bg-light rounded-end-5">
                                    <p className="mb-0">Business Strategy</p>
                                    <h5 className="mb-0">Our Business Growth</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}