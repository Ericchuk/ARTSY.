import { useState, createContext } from "react";
import BooleanEgyptian from './img/Rectangle 308.png';
import RoadToEgypt from './img/Rectangle 62.png';
import Blanc from './img/Rectangle 62 (1).png';
import Ellipsia from './img/Rectangle 62 (2).png';
import Lawmakers from './img/Rectangle 62 (3).png';
import Sassy from "./img/Rectangle 254.png";
import bougie from "./img/Rectangle 256.png";
import lost from "./img/Rectangle 258.png";
import circa from "./img/Rectangle 260.png";

export const CartContext = createContext();

export const CartProvider = (props) => {
    const [inCart, setInCart] = useState([]);

    return(
        <CartContext.Provider value={[inCart, setInCart]}>
            {props.children}
        </CartContext.Provider>
    )
}
