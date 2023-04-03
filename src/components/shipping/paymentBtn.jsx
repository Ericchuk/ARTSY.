import './cssfile/paymentBtn.css';
import { useContext } from "react";
import { ProductContext } from "../productContectApi";
import  { Link } from 'react-router-dom';
import {toast} from 'react-toastify';

export default function PaymentBtn({removeShipping}){
    const {email} = useContext(ProductContext)
    function checkValues(){
        const regexemail =
        /[a-zA-z0-9/_%+-]+@[a-z0-9*-]+\.[a-z]{2,8}(.[a-z{2,8}])?/gi;
        if(regexemail.test(email) && email.length > 1 && email!== ""){
            return
        }
    }
    return(
        <section className="paymentBtn">
           <Link to="/cart/shipping/payment"><button>Proceed to payment</button></Link> 
            <p onClick={removeShipping}>Go back to cart</p>
        </section>
    )
}