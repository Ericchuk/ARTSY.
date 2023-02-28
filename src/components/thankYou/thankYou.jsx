import thankYou from '../img/Woman get online delivery.png';
import blue from '../img/Ellipse 73.svg';
import purple from '../img/Ellipse 74.svg';
import orange from '../img/Ellipse 75.svg';
import './thankYou.css';

export default function ThankYou(){
    return(
        <section className="thank-you">
            <aside>
               <img src={thankYou} alt="thank you" />
               <img src={blue} alt="color" className="color"/>
               <img src={purple} alt="color" className="color"/>
               <img src={orange} alt="color" className="color"/>
            </aside>
            
            <h5>Hey Celestina, thank you for your purchase. </h5>
            <p>You are amazing. Cheers to being <span>ARTSY!</span> </p>
        </section>
    )
}