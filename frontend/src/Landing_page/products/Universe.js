function Universe() {
    return (
        <div className="row text-center">
            <p className="mt-5 fs-5">Want to know more about our technology stack? Check out the <a href="/sdg" style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</p>
            <h1 className="mt-5 text-muted">The Zerodha Universe</h1>
            <p className="mt-3">Extend your trading and investment experience even further with our partner platforms</p>
            <div className="col " >
                <img src="./media/zerodhaFundhouse.png" alt="/kk" style={{width:"40%"}} className="mt-5" ></img>
                <p className="text-muted text-small mb-5 text ">Our asset management venture that <br/>is creating simple and transparent index <br/> funds to help you save for your goals.</p>
            </div>
            <div className="col">
                <img src="./media/sensibull-logo.svg" alt="/mmk" style={{width:"40%"}} className="mt-5"></img>
                <p className="text-muted text-small text">Options trading platform that lets you<br/>  create strategies, analyze positions, and examine<br/> 
                data points like open interest, FII/DII, and more.</p>
            </div>
            <div className="col">
                <img src="./media/tijori.svg" alt="/kl" style={{width:"40%"}} className="mt-4"></img>
                <p className="text-muted text-small text">Investment research platform<br/> 
                that offers detailed insights on stocks,<br/> 
                sectors, supply chains, and more.</p>
            </div>
            <div className="row">
            <div className="col">
                <img src="./media/streakLogo.png" alt="/kl" style={{width:"40%"}}></img>
                <p className="text-muted text-small text">Systematic trading platform<br/> 
                that allows you to create and backtest<br/> 
                strategies without coding.</p>
            </div>
            <div className="col">
                <img src="./media/smallcaseLogo.png" alt="/kl" style={{width:"40%"}}></img>
                <p className="text-muted text-small text">Thematic investing platform<br/> 
                that helps you invest in diversified<br/> 
                baskets of stocks on ETFs.</p>
            </div>
            <div className="col">
                <img src="./media/ditto-logo.png" alt="/kl" style={{width:"40%"}}></img>
                <p className="text-muted text-small text">Personalized advice on life<br/> 
                and health insurance. No spam<br/> 
                and no mis-selling.</p>
            </div>
            </div>
            <div className="text-center mt-5 mb-5">
            <button className="btn btn-primary" style={{width:"15%"}}>Sign up for free</button>
            </div>
        </div>
      );
}

export default Universe;