function Rightsection({imageURL,productName,productDescription,link}) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-4 mar">
                    <h1 className="fs-4 mt-5 ">{productName}</h1>
                    <p className="mt-4">{productDescription}</p>
                    <a href="/pro" style={{textDecoration:"none"}}>{link}<i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <img src={imageURL} alt=""></img>
                </div>
            </div>
        </div>
    );
}

export default Rightsection;