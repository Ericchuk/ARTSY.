import arrowRight from "../img/Vector (16).png";
import diamond from "../img/Vector (14).png";
import Sassy from "../img/Rectangle 254.png";
import bougie from "../img/Rectangle 256.png";
import lost from "../img/Rectangle 258.png";
import circa from "../img/Rectangle 260.png";
import Fav from "../img/Vector (15).png";
import "./cssfile/moreFromCollection.css";
import { useState } from "react";

export default function MoreFromCollection() {
  const [id, setId] = useState(0);

  const caroData = [
    {
      id: 0,
      img: Sassy,
      title: "Sassy",
      price: "3.20",
      fav: false,
    },
    {
      id: 1,
      img: bougie,
      title: "Bougie",
      price: "7.20",
      fav: false,
    },
    {
      id: 2,
      img: lost,
      title: "lost",
      price: "9.20",
      fav: false,
    },
    {
      id: 3,
      img: circa,
      title: "Circa '95",
      price: "3.20",
      fav: false,
    },
  ];

  const caroDatas = caroData.map((data) => {
    return (
      <div key={data.id}>
        <img src={Fav} alt="favourite" />
        <img src={data.img} alt={data.title} />
        <div>
          <p>{data.title}</p>
          <div>
            <img src={diamond} alt="diamond" />
            <p>{data.price}</p>
          </div>
        </div>
      </div>
    );
  });

  function next() {
    if (id === caroData.length - 1) {
      return;
    } else {
      setId(id + 1);
    }
  }

  function prev() {
    if (id === 0) {
      return;
    } else {
      setId(id - 1);
    }
  }

  return (
    <section className="moreFromCollection">
      {window.innerWidth > 699 ? (
        <h3>Explore more from this collection</h3>
      ) : (
        <h3>More from this collection</h3>
      )}

      {window.innerWidth < 700 ? (
        <aside>
          <div>
            <img src={Fav} alt="favourite" />
            <img src={caroData[id].img} alt={caroData[id].title} />
            <div>
              <p>{caroData[id].title}</p>
              <div>
                <img src={diamond} alt="diamond" />
                <p>{caroData[id].price}</p>
              </div>
            </div>
          </div>
        </aside>
      ) : (
        <aside>{caroDatas}</aside>
      )}

      <div className="buttons">
        <div className="img-container" onClick={prev}>
          <img src={arrowRight} alt="prev" className="arrowLeft" />
        </div>
        <div className="img-container" onClick={next}>
          <img src={arrowRight} alt="next" />
        </div>
      </div>
    </section>
  );
}
