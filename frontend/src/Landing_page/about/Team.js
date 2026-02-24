function Team() {
    return ( 
        <div className="container">
            <div className="row text-center text-muted">
                <h2 className="mb-5">People</h2>
            </div>
            <div className="row">
                <div className="col text-center">
                    <img src="media/nithinKamath.jpg" alt="RohitImage" 
                    style={{borderRadius:"100%",width:"50%"}}>
                    </img>
                    <p className="fs-5">Nithin Kamath</p>
                    <p className="text-muted">Founder, CEO</p>
                </div>
                <div className="col">
                    <p className="mt-3">
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>
                        Playing basketball is his zen.
                    </p>
                    <p>
                        Connect on <a href="/acts" style={{textDecoration:"none"}}>Homepage</a> / <a href="/acts" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="/acts" style={{textDecoration:"none"}}>Twitter</a>
                    </p>
                </div>
            </div>
        </div>
     );
}

export default Team;