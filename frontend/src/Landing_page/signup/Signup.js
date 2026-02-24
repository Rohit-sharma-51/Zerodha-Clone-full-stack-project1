import Hero from "./Hero.js";
import Sign from "./Sign";
import Account from "./account.js";
import DematAccount from "./dematAccount.js";
import Pricing from "./pricing.js";
import OpenAccount from "../OpenAccount";

function Signup(){
    return(
        <>
        <Hero/>
        <Sign/>
        <Account/>
        <DematAccount/>
        <Pricing/>
        <OpenAccount/>
        </>
    )
}

export default Signup;