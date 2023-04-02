import { useContext } from "react";
import { ProductContext } from "../productContectApi";
import remove from "../img/Vector (3).png";
import "./cssfile/itemsInCart.css";

export default function ItemsInCart() {
  const {inCart, setInCart} = useContext(ProductContext);

  // increase count function
  const handleIncreaseQuantity = (itemId) => {
    const itemIndex = inCart.findIndex((item) => item.id === itemId);
    const updatedCartItems = [...inCart];
    updatedCartItems[itemIndex].quantity += 1;
    setInCart(updatedCartItems);
  };

  // decrease count function
  const handleDecreaseQuantity = (itemId) => {
    const itemIndex = inCart.findIndex((item) => item.id === itemId);
    const updatedCartItems = [...inCart];
    if (updatedCartItems[itemIndex].quantity > 1) {
      updatedCartItems[itemIndex].quantity -= 1;
      setInCart(updatedCartItems);
    }
  };

  //   delete function
  const handleDeleteItem = (itemId) => {
    const updatedCartItems = inCart.filter((item) => item.id !== itemId);
    setInCart(updatedCartItems);
  };

  // map through itemsInCart
  const item = inCart.map((each) => {
    return (
      <div className="" key={each.id}>
        <img src={each.img} alt={each.name} />
        <div className="itemInCart-info">
          <span>
            {window.innerWidth < 700 ? <p>{each.type}</p> : ""}
            <p className="name">{each.ref}</p>
            {window.innerWidth > 700 ? (
              <p className="creator">{each.creator}</p>
            ) : (
              ""
            )}
            {window.innerWidth > 700 ? (
              <p className="size">
                Size: <span>{each.size}</span>
              </p>
            ) : (
              ""
            )}
          </span>

          <span className="counter">
            <button onClick={() => handleDecreaseQuantity(each.id)}>-</button>
            <p>{each.quantity}</p>
            <button onClick={() => handleIncreaseQuantity(each.id)}>+</button>
          </span>
        </div>
        <div className="delete-container">
          <span className="remove" onClick={() => handleDeleteItem(each.id)}>
            <img src={remove} alt="" />
          </span>
          <p className="price">${(each.price * each.quantity).toFixed(2)}</p>
        </div>
      </div>
    );
  });
  return (
    <section className="itemInCart">
      <aside className="itemInCart-container">
        {inCart.length !== 0 ? (
          item
        ) : (
          <p>
            <b>No item in cart</b>
          </p>
        )}
      </aside>
    </section>
  );
}
