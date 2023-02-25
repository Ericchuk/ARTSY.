import './cssfile/paymentBtn.css'

export default function PaymentBtn({removeShipping}){
    return(
        <section className="paymentBtn">
            <button>Proceed to payment</button>
            <p onClick={removeShipping}>Go back to cart</p>
        </section>
    )
}