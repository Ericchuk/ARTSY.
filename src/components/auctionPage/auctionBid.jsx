import love from "../img/Vector (19).png";
import noLove from "../img/Vector (18).png";
import outOfBox from "../img/Rectangle 251.png";
import chairsOnRope from "../img/Rectangle 245.png";
import { useState } from "react";
import More from '../moreArrowBlack';
import './cssfile/auctionBid.css';
import { toast } from 'react-toastify';

export default function AuctionBid() {
  

  function alert(){
    toast.warn("Please this ia a dummy button, kindly head to the Marketplace to purchase an art")
  }

  const [creators, setCreators] = useState([
    {
      id: 0,
      img: outOfBox,
      name: "Out of the box",
      bidStart: "0.57 ETH",
      creator: "Jacob Banks",
      date: "12 / 08 / 22",
      currentBid: "0.987ETH",
      fav: true,
    },
    {
      id: 1,
      img: chairsOnRope,
      name: "Chairs on th rope",
      bidStart: "0.34 ETH",
      creator: "Jacob Banks",
      date: "12 / 08 / 22",
      currentBid: "0.987ETH",
      fav: false,
    },
    {
      id: 2,
      img: chairsOnRope,
      name: "Chairs on th rope",
      bidStart: "0.34 ETH",
      creator: "Jacob Banks",
      date: "12 / 08 / 22",
      currentBid: "0.987ETH",
      fav: false,
    },
  ]);

  const creator = creators.map((data) => {
    return (
      <aside key={data.id}>
        <div className="box">
          {data.fav ? (
            <div className="fav" onClick={() => {unFav(data.id)}}>
               <img src={love} alt="love" /> 
            </div>
            
          ) : (
            <div className="fav" onClick={() => {unFav(data.id)}}>
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
          <button onClick={alert}>Place bid</button>
        </div>
      </aside>
    );
  });

  function unFav(itemId){
    const itemIndex = creators.findIndex((item) => item.id === itemId);
    const updatedBid = [...creators];
    if(updatedBid[itemIndex].fav === false){
      updatedBid[itemIndex].fav = true;
      setCreators(updatedBid);
    }else{
      updatedBid[itemIndex].fav = false;
      setCreators(updatedBid);
    }
  }

  return (
    <section className="auction-bid">
      <h3>Top bids from popular creators </h3>
      <aside>
        {creator}
      </aside>
      <div className="more-arrow-container" onClick={alert}>
        <p >Load more</p>
        <More />
      </div>
      
    </section>
  );
}
