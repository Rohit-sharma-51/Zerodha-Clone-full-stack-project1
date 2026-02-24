function Hero(){
    return(
        <div className="container">
            <div className="row text-center">
                <img src="media/homeHero.png" alt='Heroimage' class="mb-5" style={{width:"60%",margin:"0 auto"}}/>
                <h1>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button class="btn btn-primary p-2 fs-5" style={{width:"20%",margin:"0 auto"}}>Sign up for free</button>
            </div>
        </div>
    );
}
export default Hero;