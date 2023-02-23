import bg from '../img/Rectangle 247.png';
import LivePageHeader from './livePageHeader';
import BidPrice from './bidPrice';
import LiveStreamComment from './liveStreamComment';
import UserComment from './userComment';
import './cssfile/liveStreamPage.css';

export default function LiveStreamPage(){
    return(
        <section className="live-stream">
            <img src={bg} alt="bg" className="bg"/>
            <BidPrice />
            <LivePageHeader />
            <LiveStreamComment />
            <UserComment />
        </section>
    )
}