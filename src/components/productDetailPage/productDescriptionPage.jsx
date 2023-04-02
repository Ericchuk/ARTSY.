import './cssfile/description.css';

export default function Description({products, id}){
    return(
        <section className="description">
            <div>
                <img src={products[id].img} alt="girl" />
                <aside>
                    <p>{products[id].name}</p>
                    <p>{products[id].price.toFixed(2)}</p>
                </aside>
            </div>
        </section>
    )
}