function Leftsection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return (
        <div className="container border-top mt-5 p-5">
            <div className="row">
                <div className="col-6 mt-5">
                    <img src={imageURL} alt="productimage"></img>
                </div>
                <div className="col-2"></div>
                <div className="col-4 mar">
                    <h1 className="text-muted fs-4">{productName}</h1>
                    <p className="mt-4">{productDescription}</p>
                    <a href="/prof" style={{textDecoration:"none"}}>{tryDemo}</a>
                    <a href="/prof" style={{textDecoration:"none",marginLeft:"50px"}}>{learnMore}</a><br/>

                    <img src="./media/googlePlayBadge.svg" alt="googlePlay" className="mt-4"/>
                    <img src="./media/appstoreBadge.svg" alt="appstore" className="mt-4" style={{marginLeft:"50px"}}/>
                </div>
            </div>
        </div>
      );
}

export default Leftsection;