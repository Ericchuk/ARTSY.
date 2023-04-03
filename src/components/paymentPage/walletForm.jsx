import "./cssfile/walletForm.css";
import { useContext } from 'react';
import { ProductContext } from "../productContectApi";
// import fireDb from "../../config"


export default function WalletForm() {
  const inputs = [
    {
      id: 0,
      type: "text",
      name: "Wallet type",
      // value=""
    },
    {
      id: 1,
      type: "text",
      name: "Key",
      placeholder: "Please enter your key",
    },
    {
      id: 2,
      type: "date",
      name: "Expiry date",
    },
    {
      id: 3,
      type: "text",
      name: "Safe code",
    },
  ];
  const {inCart,shippingFare,total, gTotal, select,city,country,writeUserData} = useContext(ProductContext)

  const input = inputs.map((each) => {
    return (
      <div className="input" key={each.id}>
        <label htmlFor={each.type}>{each.name}</label>
        <input type={each.type} placeholder={each.placeholder} />
      </div>
    );
  });

  return (
    <section className="wallet-form">
      <aside>
        {input}
        <div className="instruction">
          <input type="checkbox"   name="remember"    id="remember" />
          <label htmlFor="remember">
            Save my wallet details & information for future transactions
          </label>
        </div>
        <a href="/cart/payment/thankYou"><button onClick={writeUserData}>Confirm</button></a>
      </aside>

      <aside>
        <h4>Payment Summary</h4>
        <div>
          <p>{select} : 002345KJi90pzzz3</p>
          <p>Actively linked to {city}, {country}.</p>
        </div>
        <div>
          <p>Expected arrival date: Between 22nd September and 26th September 2022</p>
        </div>
        <section className="">
          <aside>
            <div>
              <p>Products in cart:</p>
              <p>
                <b>{inCart.length} items</b>
              </p>
            </div>
            <div>
              <p>Shipping:</p>
              <p>
                <b>${shippingFare}</b>
              </p>
            </div>
            <div>
              <p>Total</p>
              <p>
                <b>${total}</b>
              </p>
            </div>

            <hr />
            <div>
              <p>Grand total:</p>
              <p>
                <b>${gTotal}</b>
              </p>
            </div>
          </aside>
        </section>
      </aside>
    </section>
  );
}
