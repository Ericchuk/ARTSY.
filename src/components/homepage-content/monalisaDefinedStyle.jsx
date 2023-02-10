import ellipse from '../img/Ellipse 6.png';
import backImage from '../img/Rectangle 239.png';
import './cssfile/monalisaDefinedStyle.css';


export default function MonalisaStyle(){
    return(
        <section className="monalisa-style">
            <img src={backImage} alt="background" className="backImage"/>
            <aside className="monalisa">
                <img src={ellipse} alt="sun" />
                <h4>MONALISA REDEFINED IN STYLE.</h4>
            </aside>
            <aside className="o1">
                <div>
                    <h3>01</h3>
                    <p>Start on : 08:00 GTS . Monday </p> 
                </div>
                <div className="p">
                    <p>GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.</p>
                </div>
                
                <div className="see-more">
                    <a href="see more">See more</a>
                    <button>Set a reminder</button>
                </div>
                
            </aside>
            
        </section>
    )
}