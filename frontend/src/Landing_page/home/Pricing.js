function Pricing() {
    return (
        <div class="container mb-5">
            <div class="row ">
                <div class="col-4 mt-5">
                    <h1 classname="mb-5">Unbeatable pricing</h1>
                    <p class="mt-3">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="/actions" style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div class="col-2"></div>
                <div class="col-6 mt-5">
                    <div class="row text-center">
                        <div class="col border p-3">
                            <h1 class="mb-3"><i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div class="col border p-3">
                            <h1 class="mb-3"><i class="fa-solid fa-indian-rupee-sign"></i>20</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;