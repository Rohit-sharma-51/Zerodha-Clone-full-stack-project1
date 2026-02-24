function Hero(){
    return(
        <div className="container-fluid" id="supportHero">
            <div className="p-5" id="supportWrapper">
                <h4>Support Portal</h4>
                <a href="/">Track Tickets</a>
            </div>
            <div className="row p-5 m-3">
                <div className="col-6 p-3">
                    <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder="Eg. how do i activate F & O"/> <br/>
                    <a href="/">Track Account Opening</a>
                    <a href="/" className="ms-2">Track Segment Activation</a>
                    <a href="/" className="ms-2">Track Account Opening</a>
                    <a href="/" className="ms-2">Kite user manual</a>
                </div>
                <div className="col-6 p-5">
                    <h1 className="fs-3">Feature</h1>
                    <a href="/">Current Takeovers and Delisting-January 2026</a>
                    <a href="/" className="ms-3">Latest Inraday Levarages-MIS & co</a>

                </div>
            </div>
        </div>
    );
}

export default Hero;