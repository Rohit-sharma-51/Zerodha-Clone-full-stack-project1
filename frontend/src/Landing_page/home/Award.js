import React from "react";

function Awards(){
    return(
        <div class="container mt-5 mb-5">
            <div class="row">
                <div class="col p-5 mt-5">
                    <img src="media/largestBroker.svg" alt="broker"/>
                </div>
                <div class="col p-5 mt-5">
                    <h1>Largest stock broker in India</h1>
                    <p class="mb-5">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India's largest broker; </p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li><p>Futures and options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. securities</p></li>
                            </ul>
                        </div>
                       <img src="media/pressLogos.png" alt="logosimage"></img>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default Awards;