import back from '../img/Rectangle 240.png';
import center from '../img/Rectangle 241.png';
import front from '../img/Rectangle 242.png';
import './cssfile/introductorySection.css';


export default function Banner1() {
    return(
        <section className="section">
            <h3>Photography is poetry and beautiful untold stories</h3>
            <p>Flip through more than 10,000 vintage shots,old photographs, historic images and captures seamlessly in one place. Register to get top access.</p>
            <aside>
                <img src={front} alt="flower & girl" className="img1" />
                <img src={center} alt="flower" className="img2"/>
                <img src={back} alt="smiling girl" className="img3" />
            </aside>
        </section>
    )
}