import { useState, useContext } from "react";
import { ProductContext } from '../productContectApi';
import Fav from "../img/Vector (17).png";
import "./cssfile/addToCart.css";

export default function AddToCart({ id, products }) {
  const {inCart,setInCart} = useContext(ProductContext);
  const [cartItems,setCartItems ] = useState(false);

  function addToCart(item) {
    if (inCart.some((cart) => cart.id === item.id)) {
      setCartItems(true);
      
    } else {
      setCartItems(false);
      setInCart([...inCart, item]);
      console.log(inCart.some((cart) => cart.id === item.id));
    }
  }
  return (
    <section className="addToCart">
      <aside>
        <button
          disabled={cartItems ? "disabled" : ""}
          onClick={() => addToCart(products[id])}
        >
          {cartItems ? "Added" : "Add to cart"}
        </button>
        <div className="fav-container">
          <img src={Fav} alt="favourite" />
        </div>
      </aside>
    </section>
  );
}
