import './cssfile/paymentBtn.css'
;
import  { Link } from 'react-router-dom';
export default function PaymentBtn({removeShipping}){
    return(
        <section className="paymentBtn">
           <Link to="/cart/shipping/payment"><button>Proceed to payment</button></Link> 
            <p onClick={removeShipping}>Go back to cart</p>
        </section>
    )
}