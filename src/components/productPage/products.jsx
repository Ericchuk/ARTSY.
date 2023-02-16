import More from '../moreArrow';

export default function Products({products}){
    return(
        <section>
            {products}

            <div>
                <p>Load more</p>
                <More />
            </div>
        </section>
    )
}