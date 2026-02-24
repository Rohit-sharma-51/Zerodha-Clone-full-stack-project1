function Brokerage() {
    return (  
        <div className="container">
            <div className="row text-center border-top p-5">
                <div className="col-7 mt-5">
                    <a href="/hj" style={{textDecoration:"none"}}>
                    <h3 className="fs-5">Brokerage Calculator</h3>
                    </a>
                    <ul className="text-muted" style={{lineHeight:"2.5",fontSize:"12px",textAlign:"left"}}>
                        <li>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery.</li>
                        <li>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</li>
                        <li>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</li>
                        <li>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders</li>
                        <li>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</li>
                    </ul>
                </div>
                <div className="col-5  mt-5">
                    <a href="/hj" style={{textDecoration:"none"}}>
                    <h3 className="fs-5">List of charges</h3>
                    </a>
                    <ul className="text-muted" style={{lineHeight:"2.5",fontSize:"12px",textAlign:"left"}}>
                        <li>Tax levied by the government on the services rendered.</li>
                        <li>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</li>
                        <li>Female demat account holders will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</li>
                        <li>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;