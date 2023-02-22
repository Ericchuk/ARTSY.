// import { useParams } from 'react-reacter-dom';
import Description from "./productDescriptionPage";
import Creator from "./creatorsDescriptionPage";
import Counter from "./counter";
import AddToCart from "./addTocart";
import MoreInfo from "./moreInfo";
import MoreFromCollection from "./moreFromCollection";
import Href from "../productPage/productHref";
import './cssfile/productDetailPage.css';

export default function ProductDetailPage(){
    // const params = useParams();
    return(
        <section className="productDetailPage">
            <Href />
            <Description />
            <Creator />
            <Counter />
            <AddToCart />
            <MoreInfo />
            <MoreFromCollection />
        </section>
    )
}