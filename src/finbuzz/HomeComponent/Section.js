import React from "react";
import './Style.css';
import './Section.css';

export default function Section() {
    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="w-100 h-100 text-white d-flex flex-column justify-content-center position-relative z-1">
                        <p className="p-width border border-2 border-white text-center fw-bold py-1 rounded-1">
                            WE CREATE DIGITAL PRODUCT
                        </p>
                        <h1 className="display-5 fw-bold mb-4">Provide Massive Business Solutions</h1>
                        <p className="p-fsize mb-4">
                            Business contents insurance is type of business insurance ossessions and equipment.
                        </p>
                        <div className="d-flex flex-sm-row flex-column">
                            <button className="btn btn-secondary fw-bold btn-custom px-4 py-3 rounded rounded-5 mb-sm-0 mb-1">
                                GET STARTED NOW
                                <i className="fa-solid fa-circle-arrow-right fa-xl ps-1 fa-hover"></i>
                            </button>
                            <a href="#"
                                className="text-white text-decoration-none link-offset-2 align-self-center ps-sm-5 ps-0 mt-sm-0 mt-4">
                                <i className="fa-solid fa-circle-play fa-beat-fade fa-2xl icon-fsize" style={{ color: 'white' }}></i>
                                <span className="ps-3 p-fsize text-decoration-underline">Watch The Video</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}