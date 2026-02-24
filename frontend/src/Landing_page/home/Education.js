import React from "react";

function Education() {
    return (
        <div class="container mt-5 p-5">
            <div class='row '>
                <div class="col-6">
                    <img src="media/education.svg" alt="educationimage" class="mr-5"></img>
                </div>
                <div class="col-6 mt-5">
                    <h1 class="mb-3 fs-2">Free and open market education</h1>
                    <p class="mb-3">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="/action" style={{textDecoration:"none"}} >Varsity <i class="fa-solid fa-arrow-right"></i></a>
                    <p class="mt-4">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="/act" style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;
