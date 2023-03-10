import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from '../productContectApi';
import Description from "./productDescriptionPage";
import Creator from "./creatorsDescriptionPage";
import Counter from "./counter";
import AddToCart from "./addTocart";
import MoreInfo from "./moreInfo";
import MoreFromCollection from "./moreFromCollection";
import Href from "../productPage/productHref";
import './cssfile/productDetailPage.css';

export default function ProductDetailPage(){
    const { id } = useParams();
    const [product] = useContext(ProductContext);
   
    return(
        <section className="productDetailPage">
            
            <Href />
            <Description product={product} id={id}/>
            <Creator product={product} id={id}/>
            <Counter />
            <AddToCart id={id} product={product}/>
            <MoreInfo />
            <MoreFromCollection />
        </section>
    )
}