import More from '../moreArrowBlack';
import './cssfile/products.css';

export default function Products({products, next, done, prev}){
    return(
        <section className="products">
            <aside>
                {products}
            </aside>
            

            <div className={done ? "arrows-container" : "arrows"}>
                {done ?  <div className="red rotate">
                    <p ><More next={prev} /></p>
                    <p>Back</p>
                </div> : ""}
                <div className="red">
                    <p>Load more</p>
                    <p ><More next={next} /></p>
                </div>
                
            </div>
            
        </section>
    )
}