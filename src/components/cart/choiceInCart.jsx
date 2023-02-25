import "./cssfile/choiceInCart.css";

export default function ChoiceInCart({changeShipping, shipping}) {
  return (
    <section className="choiceInCart">
     {window.innerWidth < 700 ? <div className="choiceInCart-container">
        <div className="choice choice1">
          <p>Shop</p>
        </div>
        <div className="choice choice2">
          <p>Scheduled</p>
        </div>
      </div>
        :
      <div className={shipping ? "desktop-choice-in-container desktop-with-shipping" : "desktop-choice-in-container desktop-without-shipping" }>
        <div className={!shipping ? "choice choice1" : "notChoice choice"}>
          <p>Shopping cart</p>
        </div>
        <div className={shipping ? "choice picked" : " choice2 choice"} onClick={changeShipping}>
          <p>Shipping details</p>
        </div>
        <div className="choice choice3">
          <p>Payment details</p>
        </div>
      </div>}
    </section>
  );
}
