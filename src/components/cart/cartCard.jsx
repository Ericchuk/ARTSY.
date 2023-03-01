import { Link } from "react-router-dom";
import { useState,useContext, useEffect } from "react";
import { CartContext } from "../cartItemContextApi";
import "./cssfile/cartCard.css";

export default function CartCard({shipping, changeShipping}) {
  const [cartItems] = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [shippingFare, setShippingFare] = useState(0);
  const [gTotal, setGTotal] = useState(0)

  useEffect(() => {
    let sum = 0;
    cartItems.forEach((item) => {
      sum += item.price;
    });
    setTotal(sum);

    let tenPercent = (total * 10) / 100;
    setShippingFare(tenPercent);

    let grandTotal = total + shipping;
    setGTotal(grandTotal);

  }, [cartItems])

  return (
    <section className="cart-card">
      <aside>
        <div>
          <p>Products in cart:</p>
          <p>
            <b>{cartItems.length} {cartItems.length > 1 ? "items" : "item"}</b>
          </p>
        </div>
        <div>
          <p>Shipping:</p>
          <p>
            <b>${cartItems.length > 1 ? shippingFare.toFixed(2) : "0.00"}</b>
          </p>
        </div>
        <div>
          <p>Total</p>
          <p>
            <b>${total.toFixed(2)}</b>
          </p>
        </div>

        <hr />
        <div>
          <p>Grand total:</p>
          <p>
            <b>${cartItems.length > 1 ? gTotal.toFixed(2) : "0.00"}</b>
          </p>
        </div>
      </aside>

     {!shipping ? <aside>
        <button onClick={changeShipping}>Proceed to checkout</button>
        <Link to="/marketplace">Continue shopping</Link>
      </aside> : ""}
    </section>
  );
}
