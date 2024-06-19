import React from "react";
import './Style.css';
import './OurTestimonials.css';

export default function OurTestimonials() {
    return (
        <>
            <div className="ourTestimonials">
                <div className="bg1">
                    <div className="container-xl">
                        <div className="col-lg-5 col-lg-6 col-md-8 col-9 mx-auto text-center text-white position-relative z-1">
                            <h5 className="title-white border-white px-3 py-1 mb-3 rounded">OUR TESTIMONIALS</h5>
                            <h2 className="mb-3 fw-bold">We are Very Glad to Know Our Client Reviews</h2>
                            <p className="mb-3">Our agency can only be as strong as our peopleagenhave run their businesses Duis
                                aute irure dolorrepreh
                            </p>
                        </div>
                    </div>
                    <div className="bg1-img1 d-none d-lg-inline-block">
                        <img src="./Img/ourTestimonialBG1.png"/>
                    </div>
                    <div className="bg1-img2 d-none d-lg-inline-block">
                        <img src="./Img/ourTestimonialBG2.png" className="w-100"/>
                    </div>
                </div>
                <div className="bg2 pb-5">
                    <div className="container-xl">
                        <div className="carousel slide p-4 bg-white" id="carousel1" data-bs-ride="carousel" data-bs-interval="2000">
                            <div className="carousel-inner">
                                <div className="carousel-item active text-center">
                                    <img src="./Img/ourTestimonial1.jpg" alt="Our Testimonial" className="rounded-circle"/>
                                        <div className="w-75 mx-auto pt-4">
                                            <p className="text-secondary fs-4">" When an unknown printer took a gallery of type and
                                                scrambled it to make a type
                                                book. It has survived not only five centuries. "
                                            </p>
                                            <hr className="border-3 text-color opacity-100 mx-auto" style={{width: '50px'}}/>
                                                <h4 className="mb-0">Robert Smith</h4>
                                                <p className="form-text mt-0 mb-1">CEO</p>
                                                <div>
                                                    <i className="fa-solid fa-star" style={{color: '#ffb300'}}></i>
                                                    <i className="fa-solid fa-star" style={{color: '#ffb300'}}></i>
                                                    <i className="fa-solid fa-star" style={{color: '#ffb300'}}></i>
                                                    <i className="fa-solid fa-star" style={{color: '#ffb300'}}></i>
                                                    <i className="fa-solid fa-star" style={{color: '#ffb300'}}></i>
                                                </div>
                                        </div>
                                </div>
                                <div className="carousel-item text-center">
                                    <img src="./Img/ourTestimonial2.jpg" alt="Our Testimonial" className="rounded-circle"/>
                                        <div className="w-75 mx-auto pt-3">
                                            <p className="text-secondary fs-4">" When an unknown printer took a gallery of type and
                                                scrambled it to make a type
                                                book. It has survived not only five centuries. "
                                            </p>
                                            <hr className="border-3 text-color opacity-100 mx-auto" style={{width: '50px'}}/>
                                                <h4 className="mb-0">Steven Sjones</h4>
                                                <p className="form-text mt-0 mb-1">CEO Founder</p>
                                                <div>
                                                    <i className="fa-solid fa-star" style={{color: '#ffb300'}}></i>
                                                    <i className="fa-solid fa-star" style={{color: '#ffb300'}}></i>
                                                    <i className="fa-solid fa-star" style={{color: '#ffb300'}}></i>
                                                    <i className="fa-solid fa-star" style={{color: '#ffb300'}}></i>
                                                    <i className="fa-solid fa-star" style={{color: '#ffb300'}}></i>
                                                </div>
                                        </div>
                                </div>
                                <div className="carousel-item text-center">
                                    <img src="./Img/ourTestimonial3.jpg" alt="Our Testimonial" className="rounded-circle"/>
                                        <div className="w-75 mx-auto pt-3">
                                            <p className="text-secondary fs-4">"Bookan unknown printer took a gallery of type and
                                                scrambled it to make a type
                                                book. It has survived not only five centuries. "
                                            </p>
                                            <hr className="border-3 text-color opacity-100 mx-auto" style={{width: '50px'}}/>
                                                <h4 className="mb-0">Mrs Rebeka</h4>
                                                <p className="form-text mt-0 mb-1">Finance</p>
                                                <div>
                                                    <i className="fa-solid fa-star" style={{color: '#ffb300'}}></i>
                                                    <i className="fa-solid fa-star" style={{color: '#ffb300'}}></i>
                                                    <i className="fa-solid fa-star" style={{color: '#ffb300'}}></i>
                                                    <i className="fa-solid fa-star" style={{color: '#ffb300'}}></i>
                                                    <i className="fa-solid fa-star" style={{color: '#ffb300'}}></i>
                                                </div>
                                        </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" data-bs-target="#carousel1" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon bg-color"></span>
                            </button>
                            <button className="carousel-control-next" data-bs-target="#carousel1" data-bs-slide="next">
                                <span className="carousel-control-next-icon bg-color"></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                            <img src="./Img/ourTestimonialIcon1.png" alt="Icon" className="opacity-hover"/>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                            <img src="./Img/ourTestimonialIcon2.png" alt="Icon" className="opacity-hover"/>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                            <img src="./Img/ourTestimonialIcon3.png" alt="Icon" className="opacity-hover"/>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                            <img src="./Img/ourTestimonialIcon4.png" alt="Icon" className="opacity-hover"/>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                            <img src="./Img/ourTestimonialIcon5.png" alt="Icon" className="opacity-hover"/>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                            <img src="./Img/ourTestimonialIcon6.png" alt="Icon" className="opacity-hover"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}