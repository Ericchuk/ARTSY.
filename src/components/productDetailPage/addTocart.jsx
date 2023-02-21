import Fav from '../img/Vector (17).png';

export default function AddToCart(){
    return(
        <section className="addToCart">
            <aside>
                <button> Add to cart</button>
                <div className="fav-container">
                    <img src={Fav} alt="favourite"/>
                </div>
            </aside>
        </section>
    )
}