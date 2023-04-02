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
    const {products} = useContext(ProductContext);
   
    return(
        <section className="productDetailPage">
            
            <Href />
            <Description products={products} id={id}/>
            <Creator products={products} id={id}/>
            <Counter />
            <AddToCart id={id} products={products}/>
            <MoreInfo />
            <MoreFromCollection />
        </section>
    )
}