import Href from '../productPage/productHref';
import AuctionDescription from './auctionDescription';
import AuctionBid from './auctionBid';

export default function AuctionPage(){
    return(
        <section className="auction-page">
           {window.innerWidth > 699 ? <Href /> : ""}
            <AuctionDescription />
            <AuctionBid />
        </section>
    )
}