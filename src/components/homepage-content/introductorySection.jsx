import back from "../img/Rectangle 240.png";
import center from "../img/Rectangle 241.png";
import front from "../img/Rectangle 242.png";
import first from "../img/Rectangle 230 (2).png";
import second from "../img/Rectangle 231.png";
import third from "../img/Rectangle 232.png";
import fourth from "../img/Rectangle 233.png";
import "./cssfile/introductorySection.css";

export default function Banner1() {
  const desktopImage = [
    {
      id: 0,
      src: first,
      alt: "girl",
    },
    {
      id: 1,
      src: second,
      alt: "flower",
    },
    {
      id: 2,
      src: third,
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
      src:second ,
      alt: "girl",
    },
    {
      id: 1,
      src:first ,
      alt: "flower",
    },
    {
      id: 2,
      src:fourth ,
      alt: "flower",
    },
    {
      id: 3,
      src:third ,
      alt: "flower",
    },
  ];

  const deskMap = desktopImage
    .map((each) => {
      return (
        // <aside key={each.id}>
        <img src={each.src} alt={each.alt} className="im" />
        // </aside>
      );
    });

    const deskMap2 = desktopImage
    .map((each) => {
      return (
        // <aside key={each.id}>
        <img src={each.src} alt={each.alt} className="im" />
        // </aside>
      );
    }).reverse();

    const deskMap3 = desktopImage3
    .map((each) => {
      return (
        // <aside key={each.id}>
        <img src={each.src} alt={each.alt} className="im" />
        // </aside>
      );
    }).reverse();

    const deskMap4 = desktopImage3
    .map((each) => {
      return (
        // <aside key={each.id}>
        <img src={each.src} alt={each.alt} className="im" />
        // </aside>
      );
    });


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
            {deskMap}
          </aside>
          {window.innerWidth > 1020 ? <aside className="desktop-view desktop-view-2">
            {deskMap2}
          </aside> : ""}
          {window.innerWidth > 1020 ?  <aside className="desktop-view desktop-view-3">
            {deskMap3}
          </aside> : ""}
          {window.innerWidth > 1020 ?  <aside className="desktop-view desktop-view-4">
            {deskMap4}
          </aside> : ""}
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
