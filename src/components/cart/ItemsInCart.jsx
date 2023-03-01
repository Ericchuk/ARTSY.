import { useContext } from "react";
import { CartContext } from "../cartItemContextApi";
import remove from "../img/Vector (3).png";
import "./cssfile/itemsInCart.css";

export default function ItemsInCart() {
  const [cartItems, setCartItems] = useContext(CartContext);

  // increase count function
  const handleIncreaseQuantity = (itemId) => {
    const itemIndex = cartItems.findIndex((item) => item.id === itemId);
    const updatedCartItems = [...cartItems];
    updatedCartItems[itemIndex].quantity += 1;
    setCartItems(updatedCartItems);
  };

  // decrease count function
  const handleDecreaseQuantity = (itemId) => {
    const itemIndex = cartItems.findIndex((item) => item.id === itemId);
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[itemIndex].quantity > 1) {
      updatedCartItems[itemIndex].quantity -= 1;
      setCartItems(updatedCartItems);
    }
  };

//   delete function 
const handleDeleteItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    console.log(updatedCartItems)
    setCartItems(updatedCartItems);
}

  // map through itemsInCart
  const item = cartItems.map((each) => {
    return (
      <div className="" key={each.id}>
        <img src={each.img} alt={each.name} />
        <div className="itemInCart-info">
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
          <p className="price">${each.price * each.quantity}</p>
        </div>
      </div>
    );
  });
  return (
    <section className="itemInCart">
      <aside className="itemInCart-container">
        {cartItems.length !== 0 ? item : <p><b>No item in cart</b></p>}
      </aside>
    </section>
  );
}
