import { useContext } from 'react';
import { CartContext } from '../cartItemContextApi';
import Fav from '../img/Vector (17).png';
import './cssfile/addToCart.css'

export default function AddToCart({id, product}){
    const [cartItems, setCartItems] = useContext(CartContext);

    function addToCart(item){
        setCartItems([...cartItems, item]);
    }
    return(
        <section className="addToCart">
            <aside>
                <button onClick={() => addToCart(product[id])}> Add to cart</button>
                <div className="fav-container">
                    <img src={Fav} alt="favourite"/>
                </div>
            </aside>
        </section>
    )
}