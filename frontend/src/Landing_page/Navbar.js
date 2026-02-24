import {Link} from "react-router-dom"; 

function Navbar(){
    return(
        <div class="mb-5">
        <nav class="navbar navbar-expand-lg border-bottom" >
  <div class="container">
    <Link class="navbar-brand" to="/">
    <img src="media/logo.svg" alt="logo" style={{width:"20%"}}></img>
    </Link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav  mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/signUp">Signup</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item ">
          <Link class="nav-link " to="/product" role="button" aria-expanded="false">
            Product
          </Link>
          </li>
        <li class="nav-item">
          <Link class="nav-link " aria-disabled="true" to="/pricing">Pricing</Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link " aria-disabled="true" to="/support">Support</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
 </div>
    );
}

export default Navbar;