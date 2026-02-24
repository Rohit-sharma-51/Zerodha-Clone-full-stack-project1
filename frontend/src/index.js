import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./Landing_page/Navbar.js";
import Footer from "./Landing_page/Footer.js";

import HomePage from "./Landing_page/home/HomePage.js";
import Signup from "./Landing_page/signup/Signup.js";
import AboutPage from "./Landing_page/about/AboutPage.js";
import ProductPage from "./Landing_page/products/ProductPage.js";
import PricingPage from "./Landing_page/pricing/PricingPage.js";
import SupportPage from "./Landing_page/support/SupportPage.js";
import Notfound from "./Landing_page/notFound.js";


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signUp" element={<Signup/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/product" element={<ProductPage/>}/>
        <Route path="/pricing" element={<PricingPage/>}/>
        <Route path="/support" element={<SupportPage/>}/>
        <Route path="*" element={< Notfound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
)