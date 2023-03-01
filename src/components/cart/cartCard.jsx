import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../cartItemContextApi";
import "./cssfile/cartCard.css";

export default function CartCard({ shipping, changeShipping }) {
  const [cartItems] = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [shippingFare, setShippingFare] = useState(0);
  const [gTotal, setGTotal] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let sum = 0;
    cartItems.forEach((item) => {
      sum += item.price * item.quantity;
    });
    setTotal(sum);

   
  }, [cartItems]);

  useEffect(() => {
    const interval = setInterval(() => {
      let tenPercent = (total * 10) / 100;
      setShippingFare(tenPercent);
      setCounter((prevCount) => prevCount + 1);
      let grandTotal = total + shipping;
      setGTotal(grandTotal);
    }, 1000);
      
    // clearing the interval
    return () => clearInterval(interval);
  }, [counter]);

  return (
    <section className="cart-card">
      <aside>
        <div>
          <p>Products in cart:</p>
          <p>
            <b>
              {cartItems.length} {cartItems.length > 1 ? "items" : "item"}
            </b>
          </p>
        </div>
        <div>
          <p>Shipping:</p>
          <p>
            <b>${cartItems.length > 0 ? shippingFare : "0.00"}</b>
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
            <b>${cartItems.length > 0 ? gTotal.toFixed(2) : "0.00"}</b>
          </p>
        </div>
      </aside>

      {!shipping ? (
        <aside>
          <button onClick={changeShipping} disabled={cartItems.length > 0 ? "" : "disabled"}>Proceed to checkout</button>
          <Link to="/marketplace">Continue shopping</Link>
        </aside>
      ) : (
        ""
      )}
    </section>
  );
}
