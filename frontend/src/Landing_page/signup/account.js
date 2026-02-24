function Account() {
    return ( 
        <div className="container mt-5 p-5">
            <div className="row">
                <h2 className="text-center mt-5">Investment options with Zerodha demat account</h2>
                <div className="col mt-5 p-5">
                    <div className="d-flex align-items-start mb-4">
                     <img src="/media/stocks-acop.svg" alt="/a" className="me-3" />
                    <div>
                    <h4>Stocks</h4>
                    <p>Invest in all exchange-listed <br/>securities</p>
                    </div>
                    </div>
                    <br/><br/>
            
                    <div className="d-flex align-items-start mb-4">
                     <img src="/media/stocks-acop.svg" alt="/a" className="me-3" />
                    <div>
                    <h4>IPO</h4>
                    <p>Apply to the latest IPOs instantly <br/>via UPI</p>
                    </div>
                    </div>
                        

                </div>
                <div className="col mt-5 p-5">
                    <div className="d-flex align-items-start mb-4">
                    <img src="/media/mf-acop.svg" alt="/a" className="me-3" />
                    <div>
                    <h4>Mutual funds</h4>
                    <p>Invest in commission-free direct<br/> mutual funds</p>
                    </div>
                    </div>
                    <br/><br/>
            
                    <div className="d-flex align-items-start mb-4">
                     <img src="/media/fo-acop.svg" alt="/a" className="me-3" />
                    <div>
                    <h4>Futures & options</h4>
                    <p>Hedge and mitigate market risk<br/> through simplified F&O trading</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="text-center ">
            <button className="btn btn-primary mb-5">Explore Investments</button>
            </div>
        </div>
     )
};

export default Account;