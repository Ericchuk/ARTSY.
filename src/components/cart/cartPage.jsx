import {useState} from "react";
import Href from "../productPage/productHref";
import ChoiceInCart from "./choiceInCart";
import ItemsInCart from "./ItemsInCart";
import CartCard from "./cartCard";
import ShippingPage from "../shipping/shippingPage";
import ThankYou from "../thankYou/thankYou";
import "./cssfile/cartPage.css";

export default function Cart() {
    const [shipping,setShipping] = useState(false);

    function changeShipping(){
        setShipping(true);
    }

    function removeShipping(){
        setShipping(false);
    }

  return (
    <section className={shipping ? "with-shipping" : "cart"}>
      <section>
       {!shipping ? <Href /> : ""}
        <ChoiceInCart changeShipping={changeShipping}  shipping={shipping} />
        <ItemsInCart />
        <CartCard shipping={shipping} changeShipping={changeShipping}   />
      </section>

      {window.innerWidth > 699 && shipping ? <ShippingPage removeShipping={removeShipping} /> : ""}

    </section>
  );
}
