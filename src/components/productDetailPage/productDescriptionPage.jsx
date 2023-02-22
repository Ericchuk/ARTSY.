import Rectangle from '../img/Rectangle 308.png';
import './cssfile/description.css';

export default function Description(){
    return(
        <section className="description">
            <div>
                <img src={Rectangle} alt="girl" />
                <aside>
                    <p>product name</p>
                    <p>amount</p>
                </aside>
            </div>
        </section>
    )
}