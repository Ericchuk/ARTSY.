import './cssfile/description.css';

export default function Description({product, id}){
    return(
        <section className="description">
            <div>
                <img src={product[id].img} alt="girl" />
                <aside>
                    <p>{product[id].name}</p>
                    <p>{product[id].price.toFixed(2)}</p>
                </aside>
            </div>
        </section>
    )
}