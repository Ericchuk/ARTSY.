import booleanEgyptian from "../img/Rectangle 236.png";
import areWeThereYet from "../img/Rectangle 230.png";
import oloibori from "../img/Rectangle 230 (1).png";
import booleanEgyptianDesktop from "../img/Rectangle 299 (1).png";
import areWeThereYetDesktop from "../img/Rectangle 299 (6).png";
import oloiboriDesktop from "../img/Rectangle 299 (5).png";
// import booleanEgyptianDesktopDark from "../img/Rectangle 299 (4).png";
// import areWeThereYetDesktopDark from "../img/Rectangle 306.png";
// import oloiboriDesktopDark from "../img/Rectangle 306 (1).png";
import More from '../moreArrow';
import ellipse14 from "../img/Ellipse 14.png";
import ellipse15 from "../img/Ellipse 15.png";
import ellipse16 from "../img/Ellipse 16.png";
import ellipse17 from "../img/Ellipse 17.png";
import ellipse18 from "../img/Ellipse 18.png";
import "./cssfile/featuredSection.css";

export default function FeaturedProduct() {
  const creatorsImg = [
    { id: 0, img: ellipse14 },
    { id: 1, img: ellipse15 },
    { id: 2, img: ellipse16 },
    { id: 3, img: ellipse17 },
    { id: 4, img: ellipse18 },
  ];

  const creators = creatorsImg.map((creator) => {
    return <img src={creator.img} alt={creator.id} key={creator.id} />;
  });

  return (
    <section className="featured-section">
      <h3>Featured Product</h3>
      <article>
        {/* section1  */}
        <aside>
          <div>
            <div>
              {window.innerWidth < 699 ? (
                <img src={booleanEgyptian} alt="lady" className="layedImg" />
              ) : (
                <img
                  src={booleanEgyptianDesktop}
                  alt="lady"
                  className="layedImg"
                />
              )}

              {window.innerWidth < 699 ? <h4>Boolean Egyptian</h4> : <h4>View product</h4>}
              <More />
            </div>
            <article>
              {window.innerWidth > 699 ? <h4>Boolean Egyptian</h4> : ""}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor pur
              </p>
              <aside className="creators-area">
                <div>{creators}</div>
                <b>64 major creators</b>
              </aside>
            </article>
          </div>
        </aside>

        {/* section2 */}

        <aside className="aside2" >
          <div>
            <div>
              {window.innerWidth < 699 ? (
                <img src={areWeThereYet} alt="" className="layedImg" />
              ) : (
                <img src={areWeThereYetDesktop} alt="" className="layedImg" />
              )}

              {window.innerWidth < 699 ? <h4>Are We There Yet?</h4> : <h4>View product</h4>}
              <More />
            </div>
            <article>
            {window.innerWidth > 699 ? <h4>Are we there yet</h4> : ""}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor pur
              </p>
              <aside className="creators-area">
                <div>{creators}</div>
                <b>64 major creators</b>
              </aside>
            </article>
          </div>
        </aside>

        {/* section3  */}

        <aside>
          <div>
            <div>
              {window.innerWidth < 699 ? (
                <img src={oloibori} alt="" className="layedImg" />
              ) : (
                <img src={oloiboriDesktop} alt="" className="layedImg" />
              )}

              {window.innerWidth < 699 ? <h4>Oloibiri 1997</h4> : <h4>View product</h4>}
              <More />
            </div>
            <article>
            {window.innerWidth > 699 ? <h4>Oloibiri 1997</h4> : ""}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor pur
              </p>
              <aside className="creators-area">
                <div>{creators}</div>
                <b>64 major creators</b>
              </aside>
            </article>
          </div>
        </aside>
      </article>
    </section>
  );
}
