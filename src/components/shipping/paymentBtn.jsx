import './cssfile/paymentBtn.css';
import { useState, useContext } from "react";
import { ProductContext } from "../productContectApi";
import  { Link,useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';

export default function PaymentBtn({removeShipping}){
    const {email,select,city,country,postalcode,number} = useContext(ProductContext)
    const navigate = useNavigate();

    function checkValues(e){
        e.preventDefault()
        const regexemail =
        /[a-zA-z0-9/_%+-]+@[a-z0-9*-]+\.[a-z]{2,8}(.[a-z{2,8}])?/gi;
        const regexPostalCode = /[0-9]{3,6}/;
        const regexNumber = /[0-9]{10,11}/;
        const regexCity = /[a-z]{3,10}/gi;
        const regexCountry = /[a-z]{3,10}/gi;

        if( regexemail.test(email) && regexPostalCode.test(postalcode) && regexNumber.test(number) && regexCity.test(city) && city !== "" && regexCountry.test(country) && country !== "" && select !== ""){
            navigate("/cart/shipping/payment")
        }else if(email === "" && email.length < 1 ||select === "" || city === "" || country === "" || postalcode === "" || number === "" ){
            toast.error("Please fill all the fields correctly")
        }
    }
    return(
        <section className="paymentBtn">
           <button onClick={checkValues}>Proceed to payment</button>
            <p onClick={removeShipping}>Go back to cart</p>
        </section>
    )
}