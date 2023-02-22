import First from "../img/Rectangle 250.png";
import Second from "../img/Rectangle 248.png";
import Third from "../img/Rectangle 249.png";
import arrowRight from "../img/Vector (16).png";
import './cssfile/auctionDescription.css'

export default function AuctionDescription() {
  const liveAuctionArray = [
    { id: 0, time: "6hrs : 40mins : 15s", img: First },
    { id: 1, time: "6hrs : 40mins : 15s", img: Second },
    { id: 2, time: "6hrs : 40mins : 15s", img: Third },
  ];


  const live = liveAuctionArray.map((data) => {
    return (
      <div className="live-auction" key={data.id}>
        <img src={data.img} alt="live story" />
        <div className="live-auction-time">
          <p>{data.time}</p>
        </div>
      </div>
    );
  });


  return (
    <section className="auction-description">
      <p>Here’s an overview of products actively on auction, explore!</p>
      <aside>{live}</aside>
      <div className="buttons">
        <div className="img-container">
          <img src={arrowRight} alt="prev" className="arrowLeft" />
        </div>
        <div className="img-container">
          <img src={arrowRight} alt="next" />
        </div>
      </div>
    </section>
  );
}
