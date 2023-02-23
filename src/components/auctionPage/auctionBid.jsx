import love from "../img/Vector (19).png";
import noLove from "../img/Vector (18).png";
import outOfBox from "../img/Rectangle 251.png";
import chairsOnRope from "../img/Rectangle 245.png";
import { useState } from "react";
import More from '../moreArrowBlack';
import './cssfile/auctionBid.css';

export default function AuctionBid() {
  const [fav, setFav] = useState(true);

  const creators = [
    {
      id: 0,
      img: outOfBox,
      name: "Out of the box",
      bidStart: "0.57 ETH",
      creator: "Jacob Banks",
      date: "12 / 08 / 22",
      currentBid: "0.987ETH",
      fav: fav,
    },
    {
      id: 1,
      img: chairsOnRope,
      name: "Chairs on th rope",
      bidStart: "0.34 ETH",
      creator: "Jacob Banks",
      date: "12 / 08 / 22",
      currentBid: "0.987ETH",
      fav: !fav,
    },
    {
      id: 2,
      img: chairsOnRope,
      name: "Chairs on th rope",
      bidStart: "0.34 ETH",
      creator: "Jacob Banks",
      date: "12 / 08 / 22",
      currentBid: "0.987ETH",
      fav: !fav,
    },
  ];

  const creator = creators.map((data) => {
    return (
      <aside key={data.id}>
        <div className="box">
          {data.fav ? (
            <div className="fav" onClick={unFav}>
               <img src={love} alt="love" /> 
            </div>
            
          ) : (
            <div className="fav" onClick={unFav}>
               <img src={noLove} alt="no Love" /> 
            </div>
            
          )}
          <img src={data.img} alt="art" />
          <div className="data-info">
            <p>{data.name}</p>
            <p>{data.bidStart}</p>
          </div>
        </div>
        <p>Creator : <b>{data.creator}</b></p>
        <p className="last">Date : <b>{data.date}</b></p>
        <div className="bids">
          <div>
            <p>Current bid</p>
            <p>{data.currentBid}</p>
          </div>
          <button>Place bid</button>
        </div>
      </aside>
    );
  });

  function unFav(){
    setFav(!fav)
  }

  return (
    <section className="auction-bid">
      <h3>Top bids from popular creators </h3>
      <aside>
        {creator}
      </aside>
      <div className="more-arrow-container">
        <p>Load more</p>
        <More />
      </div>
      
    </section>
  );
}
