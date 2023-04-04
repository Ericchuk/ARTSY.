import { useState,useEffect, createContext } from "react";
import BooleanEgyptian from "./img/Rectangle 308.png";
import RoadToEgypt from "./img/Rectangle 62.png";
import Blanc from "./img/Rectangle 62 (1).png";
import Ellipsia from "./img/Rectangle 62 (2).png";
import Lawmakers from "./img/Rectangle 62 (3).png";
import Sassy from "./img/Rectangle 254.png";
import bougie from "./img/Rectangle 256.png";
import lost from "./img/Rectangle 258.png";
import circa from "./img/Rectangle 260.png";
import firsy from "./img/Rectangle 39.png";
import secindy from "./img/Rectangle 284.png";
import thirdy from "./img/Rectangle 287.png";
import {initializeApp} from 'firebase/app';
import {getDatabase,ref,push} from 'firebase/database'
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import PaystackPop from "@paystack/inline-js"

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [inCart, setInCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState([
    {
      id: 0,
      type: "Editorial",
      ref: "Philomena",
      name: "Boolean Egyptian",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: BooleanEgyptian,
      quantity: quantity,
    },
    {
      id: 1,
      type: "Fashion",
      ref: "Warped",
      name: "Blanc",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: Blanc,
      quantity: quantity,
    },
    {
      id: 2,
      type: "Fashion",
      ref: "Warped",
      name: "Blanc",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: Blanc,
      quantity: quantity,
    },
    {
      id: 3,
      type: "Optics",
      ref: "Ellipsia",
      name: "Road To Egypt",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: RoadToEgypt,
      quantity: quantity,
    },
    {
      id: 4,
      type: "Ellipsia",
      ref: "Philomena",
      name: "Boolean Egyptian",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: Ellipsia,
      quantity: quantity,
    },
    {
      id: 5,
      type: "Nature",
      ref: "Warped",
      name: "Lawmaker",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: Lawmakers,
      quantity: quantity,
    },
    {
      id: 6,
      type: "Editorial",
      ref: "Ellipsia",
      name: "Sassy",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: Sassy,
      quantity: quantity,
    },
    {
      id: 7,
      type: "Fashion",
      ref: "Philomena",
      name: "Bougie",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: bougie,
      quantity: quantity,
    },
    {
      id: 8,
      type: "Optics",
      ref: "Warped",
      name: "Lost",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: lost,
      quantity: quantity,
    },
    {
      id: 9,
      type: "Arts & Museum",
      ref: "Ellipsia",
      name: "Circa",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: circa,
      quantity: quantity,
    },
    {
      id: 10,
      type: "Nature",
      ref: "Warped",
      name: "Boolean Egyptian",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: BooleanEgyptian,
      quantity: quantity,
    },
    {
      id: 11,
      type: "Editorial",
      ref: "Ellipsia",
      name: "Boolean Egyptian",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: BooleanEgyptian,
      quantity: quantity,
    },
    {
      id: 12,
      type: "Fashion",
      ref: "Philomena",
      name: "Boolean Egyptian",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: BooleanEgyptian,
      quantity: quantity,
    },
    {
      id: 13,
      type: "Optics",
      ref: "Warped",
      name: "Boolean Egyptian",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: BooleanEgyptian,
      quantity: quantity,
    },
    {
      id: 14,
      type: "Art & Museum",
      ref: "Ellipsia",
      name: "Boolean Egyptian",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: BooleanEgyptian,
      quantity: quantity,
    },
    {
      id: 15,
      type: "Nature",
      ref: "Philomena",
      name: "Boolean Egyptian",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: BooleanEgyptian,
      quantity: quantity,
    },
    {
      id: 16,
      type: "Editorial",
      ref: "Warped",
      name: "Boolean Egyptian",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: BooleanEgyptian,
      quantity: quantity,
    },
    {
      id: 17,
      type: "Fashion",
      ref: "Ellipsia",
      name: "Boolean Egyptian",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: BooleanEgyptian,
      quantity: quantity,
    },
    {
      id: 18,
      type: "Optics",
      ref: "Philomena",
      name: "Boolean Egyptian",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: BooleanEgyptian,
      quantity: quantity,
    },
    {
      id: 19,
      type: "Art & Museum",
      ref: "Warped",
      name: "Boolean Egyptian",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: BooleanEgyptian,
      quantity: quantity,
    },
    {
      id: 20,
      type: "Nature",
      ref: "Ellipsia",
      name: "Boolean Egyptian",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: BooleanEgyptian,
      quantity: quantity,
    },
    {
      id: 21,
      type: "Editorial",
      ref: "Philomena",
      name: "Boolean Egyptian",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: BooleanEgyptian,
      quantity: quantity,
    },
    {
      id: 22,
      type: "Fashion",
      ref: "Warped",
      name: "Blanc",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: Blanc,
      quantity: quantity,
    },
    {
      id: 23,
      type: "Optics",
      ref: "Ellipsia",
      name: "Road To Egypt",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: RoadToEgypt,
      quantity: quantity,
    },
    {
      id: 24,
      type: "Ellipsia",
      ref: "Philomena",
      name: "Boolean Egyptian",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: Ellipsia,
      quantity: quantity,
    },
    {
      id: 25,
      type: "Nature",
      ref: "Warped",
      name: "Lawmaker",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: Lawmakers,
      quantity: quantity,
    },
    {
      id: 26,
      type: "Editorial",
      ref: "Ellipsia",
      name: "Sassy",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: Sassy,
      quantity: quantity,
    },
    {
      id: 27,
      type: "Fashion",
      ref: "Philomena",
      name: "Bougie",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: bougie,
      quantity: quantity,
    },
    {
      id: 28,
      type: "Optics",
      ref: "Warped",
      name: "Lost",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: lost,
      quantity: quantity,
    },
    {
      id: 29,
      type: "Arts & Museum",
      ref: "Ellipsia",
      name: "Circa",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: circa,
      quantity: quantity,
    },
    {
      id: 30,
      type: "Nature",
      ref: "Warped",
      name: "Boolean Egyptian",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: BooleanEgyptian,
      quantity: quantity,
    },
    {
      id: 31,
      type: "Nature",
      ref: "Warped",
      name: "Boolean Egyptian",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: BooleanEgyptian,
      quantity: quantity,
    },
    {
      id: 32,
      type: "Nature",
      ref: "Warped",
      name: "Boolean Egyptian",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: BooleanEgyptian,
      quantity: quantity,
    },
    {
      id: 33,
      type: "Nature",
      ref: "Warped",
      name: "Boolean Egyptian",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: firsy,
      quantity: quantity,
    },
    {
      id: 34,
      type: "Nature",
      ref: "Warped",
      name: "Boolean Egyptian",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: secindy,
      quantity: quantity,
    },
    {
      id: 35,
      type: "Nature",
      ref: "Warped",
      name: "Boolean Egyptian",
      size: "200 ft",
      creator: "Clearamane",
      price: 36.5,
      img: thirdy,
      quantity: quantity,
    },
  ]);
  const [total, setTotal] = useState(0);
  const [shippingFare, setShippingFare] = useState(0);
  const [gTotal, setGTotal] = useState(0);
  const [counter, setCounter] = useState(0);
  const [userData] = useState([]);
  const [email, setEmail] = useState("");
  const [select, setSelect] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [number, setNumber] = useState("");
  const [key, setKey] = useState("");
  const [safeCode, setSafeCode] = useState("");
  const [postalcode, setpostalcode] = useState("")
  const [date, setDate] = useState("");
  const [paid,setPaid] = useState("false");
  const multiply = gTotal * 100;
  function scrollFunc() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if(paid){
        navigate("/")
        setPaid(false)
    }
    }, 3000)
    // clearing the interval
    return () => clearInterval(interval);
   }, [paid])

  // paysstack integration
  function payWithPayStack(){
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key:"pk_test_244bad1335a46ad6442abcb487faefe329bf4989",
      email:email,
      amount:multiply * 100,
      currency:"NGN",
      onSuccess(transaction){
        toast.success(`Payment completed ${transaction.reference}`)
        setPaid(true)
        navigate("/cart/payment/thankYou")
      },
      onCancel(){
        toast.error("Transaction was not completed.")
        navigate("/cart/shipping/payment")
      }
    })
  }


  //   firebase database config
  const config = {
    apiKey: "AIzaSyDn5WV4Fyq7K89ajxL4FEfy8PfQJBlgsCc",
    authDomain: "artsy-3d86c.firebaseapp.com",
    projectId: "artsy-3d86c",
    storageBucket: "artsy-3d86c.appspot.com",
    messagingSenderId: "217613921861",
    appId: "1:217613921861:web:7d4e6672589850d5fb7d2c",
  };

  const app = initializeApp(config);
  const db = getDatabase();
  const reference = ref(db, `userData/ ${userData}` );
  const navigate = useNavigate();
  const regexkey = /[0-9a-z]{12,16}/gi;
  const regexSafeCode = /[a-z]{4,7}/gi;

  function writeUserData(e){
    e.preventDefault()
    if(regexkey.test(key) && regexSafeCode.test(safeCode) && paid === true){
      navigate("/cart/payment/thankYou")
    }
    else if(key === "" || safeCode === "" || date === "" ){
      toast.error("Please fill the input field correctly")
    }

    //send data to database
    payWithPayStack()
      push(reference, {
      email:email,
      city:city,
      country:country,
      number:number,
      select:select,
      key:key,
      safeCode:safeCode,
      total:total,
      shippingFare:shippingFare,
      gTotal:gTotal,
      date:date,
      paid:paid,
      incart:inCart.map((item) => {
        return {
          id:item.id,
          type:item.type,
          ref:item.ref,
          name:item.name,
          size:item.size,
          creator:item.creator,
          price:item.price,
          img:item.img,
          quantity:item.quantity,
        }
      }),
     })


  }



  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        inCart,
        setInCart,
        quantity,
        setQuantity,
        total,
        setTotal,
        shippingFare,
        setShippingFare,
        gTotal,
        setGTotal,
        counter,
        setCounter,
        email,
        setEmail,
        city,
        setCity,
        country,
        setCountry,
        number,
        setNumber,
        select,
        setSelect,
        key,
        setKey,
        safeCode,
        setSafeCode,
        writeUserData,
        postalcode,
        setpostalcode,
        scrollFunc,
        setDate,
        date,
        paid,
        setPaid,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
