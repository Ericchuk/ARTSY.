import { useState, useContext } from "react";
import { CartContext } from "../cartItemContextApi";
import Fav from "../img/Vector (17).png";
import "./cssfile/addToCart.css";

export default function AddToCart({ id, product }) {
  const [cartItems, setCartItems] = useContext(CartContext);
  const [inCart, setInCart] = useState(false);

  function addToCart(item) {
    if (cartItems.some((cart) => cart.id === item.id)) {
      setInCart(true);
      
    } else {
      setInCart(false);
      setCartItems([...cartItems, item]);
      console.log(cartItems.some((cart) => cart.id === item.id));
    }
  }
  return (
    <section className="addToCart">
      <aside>
        <button
          disabled={inCart ? "disabled" : ""}
          onClick={() => addToCart(product[id])}
        >
          {inCart ? "Added" : "Add to cart"}
        </button>
        <div className="fav-container">
          <img src={Fav} alt="favourite" />
        </div>
      </aside>
    </section>
  );
}
