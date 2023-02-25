import "./cssfile/choiceInCart.css";

export default function ChoiceInCart() {
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
      <div className="desktop-choice-in-container">
        <div className="choice choice1">
          <p>Shopping cart</p>
        </div>
        <div className="choice choice2">
          <p>Shipping details</p>
        </div>
        <div className="choice choice3">
          <p>Payment details</p>
        </div>
      </div>}
    </section>
  );
}
