import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ProductContext } from "../productContectApi";
import "./cssfile/cartCard.css";

export default function CartCard({ shipping, changeShipping }) {
  const {inCart,total, setTotal, shippingFare, setShippingFare, gTotal, setGTotal,counter, setCounter,paid} = useContext(ProductContext);

  useEffect(() => {
    let sum = 0;
    inCart.forEach((item) => {
      sum += item.price * item.quantity;
    });
    setTotal(sum);

   
  }, [inCart]);

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
  }, [counter, setTotal]);

  return (
    <section className="cart-card">
      <aside>
        <div>
          <p>Products in cart:</p>
          <p>
            <b>
              {inCart.length} {inCart.length > 1 ? "items" : "item"}
            </b>
          </p>
        </div>
        <div>
          <p>Shipping:</p>
          <p>
            <b>${inCart.length > 0 ? shippingFare : "0.00"}</b>
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
            <b>${inCart.length > 0 ? gTotal.toFixed(2) : "0.00"}</b>
          </p>
        </div>
      </aside>

      {!shipping ? (
        <aside>
          <button onClick={changeShipping} disabled={inCart.length > 0 || !paid  ? "" : "disabled"}>{!paid ? "Paid" : "Proceed to checkout"}</button>
          <Link to="/marketplace">Continue shopping</Link>
        </aside>
      ) : (
        ""
      )}
    </section>
  );
}