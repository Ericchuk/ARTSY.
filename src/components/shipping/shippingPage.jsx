import ShippingForm from './shippingForm';
import PaymentBtn from './paymentBtn';
import Href from '../productPage/productHref';
import './cssfile/shippingPage.css';

export default function ShippingPage({removeShipping}){
    return(
        <section className="shippingPage">
            <Href />
            <ShippingForm/>
            <PaymentBtn removeShipping={removeShipping}/>
        </section>
    )
}