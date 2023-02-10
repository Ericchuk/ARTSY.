import booleanEgyptian from '../img/Rectangle 236.png';
import areWeThereYet from '../img/Rectangle 230.png';
import oloibori from '../img/Rectangle 230 (1).png';
import arrow from '../img/Vector (4).png';
import ellipse from '../img/Ellipse 36.png';
import ellipse14 from '../img/Ellipse 14.png';
import ellipse15 from '../img/Ellipse 15.png';
import ellipse16 from '../img/Ellipse 16.png';
import ellipse17 from '../img/Ellipse 17.png';
import ellipse18 from '../img/Ellipse 18.png';
import './cssfile/featuredSection.css';
<link href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500&display=swap" rel="stylesheet" />

export default function FeaturedProduct() {

    const creatorsImg = [
        {id:0, img:ellipse14},
        {id:1, img:ellipse15},
        {id:2, img:ellipse16},
        {id:3, img:ellipse17},
        {id:4, img:ellipse18},
    ];

    const creators = creatorsImg.map((creator) => {
        return(
            <img src={creator.img} alt={creator.id} key={creator.id}/>
        )
    })


  return (
    <section className="featured-section">
      <h3>Featured Product</h3>
      <article>
        {/* section1  */}
        <aside>
          <div>
            <div>
              <img src={booleanEgyptian} alt="lady" className="layedImg"/>
              <h4>Boolean Egyptian</h4>
              <div className="arrow-container">
                <img src={arrow} alt="" className="arrow"/>
                <img src={ellipse} alt="" />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor pur
            </p>
            <aside className="creators-area">
              <div>
                {creators}
              </div>
              <b>64 major creators</b>
            </aside>
          </div>
        </aside>

        {/* section2 */}

        <aside>
          <div>
            <div>
              <img src={areWeThereYet} alt="" className="layedImg"/>
              <h4>Are We There Yet?</h4>
              <div className="arrow-container">
                <img src={arrow} alt="" className="arrow"/>
                <img src={ellipse} alt="" />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor pur
            </p>
            <aside className="creators-area">
              <div>
                {creators}
              </div>
              <b>64 major creators</b>
            </aside>
          </div>
        </aside>

        {/* section3  */}

        <aside>
          <div>
            <div>
              <img src={oloibori} alt="" className="layedImg"/>
              <h4>Oloibiri 1997</h4>
              <div className="arrow-container">
                <img src={arrow} alt="" className="arrow"/>
                <img src={ellipse} alt="" />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor pur
            </p>
            <aside className="creators-area">
              <div>
                 {creators}
              </div>
              <b>64 major creators</b>
            </aside>
          </div>
        </aside>
      </article>
    </section>
  );
}
