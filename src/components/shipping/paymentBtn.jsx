import './cssfile/paymentBtn.css'

export default function PaymentBtn({removeShipping}){
    return(
        <section className="paymentBtn">
           <a href="cart/shipping/payment"><button>Proceed to payment</button></a> 
            <p onClick={removeShipping}>Go back to cart</p>
        </section>
    )
}