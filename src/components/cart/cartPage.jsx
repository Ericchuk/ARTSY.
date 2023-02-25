import Href from '../productPage/productHref';
import ChoiceInCart from './choiceInCart';
import ItemsInCart from './ItemsInCart';
import CartCard from './cartCard'
import './cssfile/cartPage.css';


export default function Cart(){
    return(
        <section className="cart">
            <Href />
            <ChoiceInCart />
            <ItemsInCart />
            <CartCard />
        </section>
    )
}