import AuctionDescription from './auctionDescription';
import AuctionBid from './auctionBid';

export default function AuctionPage(){
    return(
        <section className="auction-page">
            <AuctionDescription />
            <AuctionBid />
        </section>
    )
}