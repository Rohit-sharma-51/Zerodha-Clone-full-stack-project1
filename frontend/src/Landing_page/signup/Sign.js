function Sign(){
    return(
        <div className="container mt-5">
            <div className="row mb-5">
                <div className="col">
                    <img src="/media/console.svg" alt="console" />
                </div>
                <div className="col">
                    <h2 className="fs-4 mt-3">Signup now</h2>
                    <p className="text-muted">Or track your existing application</p>
                    <input placeholder="Enter your mobile no." type="number" className="mb-4"
                    onBlur={(e) => e.target.value = ""}></input><br/>
                    <button className="btn btn-primary mb-5 w-50">Get OTP</button>
                    <p>By proceeding, you agree to the Zerodha <a href="/a" style={{textDecoration:"none"}}>terms</a> & <a href="/a" style={{textDecoration:"none"}}>privacy policy</a></p><hr/>
                    <p>Looking to open NRI account? <a href="/a" style={{textDecoration:"none"}}>Click here</a></p>
                </div>
            </div>
        </div>
    )
};

export default Sign;