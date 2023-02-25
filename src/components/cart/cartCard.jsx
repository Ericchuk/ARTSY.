import { Link } from "react-router-dom";
import "./cssfile/cartCard.css";

export default function CartCard({shipping}) {
  return (
    <section className="cart-card">
      <aside>
        <div>
          <p>Products in cart:</p>
          <p>
            <b>4 items</b>
          </p>
        </div>
        <div>
          <p>Shipping:</p>
          <p>
            <b>$2.50</b>
          </p>
        </div>
        <div>
          <p>Total</p>
          <p>
            <b>$114.00</b>
          </p>
        </div>

        <hr />
        <div>
          <p>Grand total:</p>
          <p>
            <b>$116.50</b>
          </p>
        </div>
      </aside>

     {!shipping ? <aside>
        <a href="cart/shipping"><button>Proceed to checkout</button></a>
        <Link to="/marketplace">Continue shopping</Link>
      </aside> : ""}
    </section>
  );
}
