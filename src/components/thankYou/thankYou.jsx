import thankYou from '../img/Woman get online delivery.png';
import blue from '../img/Ellipse 73.svg';
import purple from '../img/Ellipse 74.svg';
import orange from '../img/Ellipse 75.svg';
import './thankYou.css';
import {useContext, useEffect} from "react";
import { ProductContext } from "../productContectApi";

export default function ThankYou(){
    const {email,scrollFunc} = useContext(ProductContext);
    useEffect(() => {
        scrollFunc()
    }, [])
    return(
        <section className="thank-you">
            <aside>
               <img src={thankYou} alt="thank you" />
               <img src={blue} alt="color" className="color"/>
               <img src={purple} alt="color" className="color"/>
               <img src={orange} alt="color" className="color"/>
            </aside>
            
            <h5>Hey {email}, thank you for your purchase. </h5>
            <p>You are amazing. Cheers to being <span>ARTSY!</span> </p>
        </section>
    )
}