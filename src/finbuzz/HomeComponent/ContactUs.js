import React from "react";
import './Style.css';
import './ContactUs.css';

export default function ContactUs() {
    return (
        <>
            <div className="contactUs custom-space">
                <div className="container-xl text-white">
                    <div className="row">
                        <div className="col-lg-6 pe-lg-5 pb-5 pb-lg-0">
                            <h5 className="title-white border-white py-1 px-3 rounded mb-3">CONTACT US</h5>
                            <h2 className="mb-3">Feel Free to Contact us for Any Consult Reason</h2>
                            <p className="mb-lg-3 mb-5">Our agency can only be as strong as our peopleagenhave their businesses Duis
                                aute irure
                                dolorreprehDuis auteirur olor in reprehenderit in voluptate.</p>
                            <div className="contact-hover">
                                <div className="p-4 d-flex align-items-center mb-3 contact">
                                    <div className="align-self-center"><i className="fa-solid fa-location-dot fa-lg"></i></div>
                                    <div className="ps-3">
                                        <p className="mb-0">Location :</p>
                                        <p className="mb-0">12/A, Pk House New York, US</p>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-hover">
                                <div className="p-4 d-flex align-items-center contact">
                                    <div className="align-self-center"> <i className="fa-solid fa-phone fa-lg"></i></div>
                                    <div className="ps-3">
                                        <p className="mb-0">Location :</p>
                                        <p className="mb-0">12/A, Pk House New York, US</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6">
                            <div className="bg-white rounded p-5">
                                <input type="text" className="form-control p-3 mb-3" placeholder="Name*"/>
                                    <div className="row">
                                        <div className="col-md">
                                            <input type="number" className="form-control p-3 mb-3" placeholder="Phone*"/>
                                        </div>
                                        <div className="col-md">
                                            <input type="email" className="form-control p-3 mb-3" placeholder="Email*"/>
                                        </div>
                                    </div>
                                    <select className="form-select p-3 mb-3">
                                        <option>Select a Subject</option>
                                        <option>Tax Planning</option>
                                        <option>Business Consulty</option>
                                        <option>Financial Advisory</option>
                                        <option>Investment</option>
                                    </select>
                                    <textarea className="form-control px-3 mb-3 h-25" placeholder="Comment"></textarea>
                                    <button className="btn btn-secondary bg-color border-0 px-4 py-2">Submit Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}