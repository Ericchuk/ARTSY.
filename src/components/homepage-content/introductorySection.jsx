import { useState, useEffect } from 'react';
import back from "../img/Rectangle 240.png";
import center from "../img/Rectangle 241.png";
import front from "../img/Rectangle 242.png";
import first from "../img/Rectangle 230 (2).png";
import second from "../img/Rectangle 231.png";
import third from "../img/Rectangle 232.png";
import fourth from "../img/Rectangle 233.png";
import "./cssfile/introductorySection.css";

export default function Banner1() {
  const [id, setId] = useState(0)
  const desktopImage = [
    {
      id: 0,
      src: first,
      alt: "girl",
    },
    {
      id: 1,
      src: fourth,
      alt: "flower",
    },
    {
      id: 2,
      src: third,
      alt: "flower",
    },
    {
      id: 3,
      src: second,
      alt: "flower",
    },
  ];
  const desktopImage2 = [
    {
      id: 0,
      src: second,
      alt: "girl",
    },
    {
      id: 1,
      src:third ,
      alt: "flower",
    },
    {
      id: 2,
      src: first,
      alt: "flower",
    },
    {
      id: 3,
      src: fourth,
      alt: "flower",
    },
  ];

  const desktopImage3 = [
    {
      id: 0,
      src:third ,
      alt: "girl",
    },
    {
      id: 1,
      src:second ,
      alt: "flower",
    },
    {
      id: 2,
      src:fourth ,
      alt: "flower",
    },
    {
      id: 3,
      src:first ,
      alt: "flower",
    },
  ];

  const desktopImage4 = [
    {
      id: 0,
      src:fourth ,
      alt: "girl",
    },
    {
      id: 1,
      src: first,
      alt: "flower",
    },
    {
      id: 2,
      src: second,
      alt: "flower",
    },
    {
      id: 3,
      src:third ,
      alt: "flower",
    },
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      if(id === 3){
        setId(0)
        
      }else{
        setId(id + 1)
        console.log(id)
      }
      
    }, 5000)
    // clearing the interval
    return () => clearInterval(interval);
  })


  return (
    <section className="section">
      <h3>
        Photography is poetry {window.innerWidth > 699 ? "&" : "and"} beautiful
        untold stories
      </h3>
      <p>
        Flip through more than 10,000 vintage shots,old photographs, historic
        images and captures seamlessly in one place. Register to get top access.
      </p>
      {window.innerWidth > 699 ? (
        <aside className="the-cover">
          <aside className="desktop-view desktop-view-1">
            {/* {deskMap} */}
            <img src={desktopImage[id].src} alt="ffff" className={desktopImage[id].id === id ? "move img" : "img"} />
          </aside>
          {/* {/* {window.innerWidth > 1020 ?  */}
          <aside className="desktop-view desktop-view-2">
            {/* {deskMap2} */}
            <img src={desktopImage2[id].src} alt="ffff" className={desktopImage[id].id === id ? "img move" : "img"} />
          </aside>
           {/* : ""} */}
          {/* {window.innerWidth > 1020 ? */}
             <aside className="desktop-view desktop-view-3"> 
            <img src={desktopImage3[id].src} alt="ffff" className={desktopImage[id].id === id ? "move" : ""} />
            {/* {deskMap3} */}
          </aside> 
          {/* : ""} */}
          {/* {window.innerWidth > 1020 ?   */}
          <aside className="desktop-view desktop-view-4">
            {/* {deskMap4} */}
            <img src={desktopImage4[id].src} alt="ffff" className={desktopImage[id].id === id ? "move" : ""} />
          </aside> : 
          {/* ""} */}
        </aside>
      ) : (
        <aside>
          <img src={front} alt="flower & girl" className="img1" />
          <img src={center} alt="flower" className="img2" />
          <img src={back} alt="smiling girl" className="img3" />
        </aside>
      )}
    </section>
  );
}
