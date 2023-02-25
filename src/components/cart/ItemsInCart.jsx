import {useState} from 'react';
import remove from '../img/Vector (3).png';
import firsy from '../img/Rectangle 39.png';
import secindy from '../img/Rectangle 284.png';
import thirdy from '../img/Rectangle 287.png';
import './cssfile/itemsInCart.css';

export default function ItemsInCart(){
    const [counter, setCounter] = useState(1);

    // increase count function 
    function increaseCounter(){
        setCounter(counter + 1);
    }

    // decrease count function
    function decreaseCounter(){
        if(counter > 1){
            setCounter(counter - 1);
        }
    }

    const itemsInCart = [
        {
            id:0,
            type:"Editorial",
            name:"Philomena",
            size:"200 ft",
            creator:"Clearamane",
            price:36.50,
            img:firsy,
        },
        {
            id:1,
            type:"Editorial",
            name:"Warped",
            size:"200 ft",
            creator:"Clearamane",
            price:36.50,
            img:secindy,
        },
        {
            id:2,
            type:"Nature",
            name:"Ellipsia",
            size:"200 ft",
            creator:"Clearamane",
            price:36.50,
            img:thirdy,
        },
        
    ]

    // map through itemsInCart 
    const item = itemsInCart.map((each) => {
        return(
            <div className="" key={each.id}>
                <img src={each.img} alt={each.name} />
                <div className="itemInCart-info">
                   {window.innerWidth < 700 ? <p>{each.type}</p> : ""}
                    <p className="name">{each.name}</p>
                    {window.innerWidth > 700 ? <p className="creator">{each.creator}</p> : ""}
                    {window.innerWidth > 700 ? <p className="size">Size: <span>{each.size}</span></p> : ""}
                    <span className="counter">
                        <button onClick={decreaseCounter}>-</button>
                        <p>{counter}</p>
                        <button onClick={increaseCounter}>+</button>
                    </span>
                 </div>
                 <div className="delete-container">
                    <span className="remove">
                      <img src={remove} alt="" />  
                    </span>
                    <p className="price">${each.price * counter}</p>
                 </div>
            </div>
        )
    })
    return(
        <section className="itemInCart">
            <aside className="itemInCart-container">
                {item}
            </aside>
        </section>
    )
}