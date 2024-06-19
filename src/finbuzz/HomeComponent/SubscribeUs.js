import React from "react";
import './Style.css';
import './SubscribeUs.css';

export default function SubscribeUs() {
    return (
        <>
            <div class="subscribeUs custom-space">
                <div class="container-xl">
                    <div class="row text-white gy-4">
                        <div class="col-md">
                            <h2 class="fw-bold mb-3">Like our service? Subscribe us</h2>
                            <p>Sign up to get new exclusive offers from our latest solutions</p>
                        </div>
                        <div class="col-md-7">
                            <input type="email" class="form-control mb-4 input1" placeholder="Type Your E-mail Address" />
                            <input type="button" class="form-control  fw-bold input2" value="SUBSCRIBE" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}