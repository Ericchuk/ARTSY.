import booleanEgyptian from '../img/Rectangle 236.png';
import areWeThereYet from '../img/Rectangle 230.png';
import oloibori from '../img/Rectangle 230 (1).png';
import arrow from '../img/Vector (4).png';
import ellipse from '../img/Ellipse 36.png';

export default function FeaturedProduct() {

    const creatorsImg = [
        {id:0},
        {id:1},
        {id:2},
        {id:3},
        {id:4}
    ]

    const creators = creatorsImg.map((creator) => {
        return(
            <p>{creator}</p>
        )
    })
  return (
    <section>
      <h3>Featured Product</h3>
      <article>
        {/* section1  */}
        <aside>
          <div>
            {/* {creators} */}
            <div>
              <img src={booleanEgyptian} alt="lady" />
              <h4>Boolean Egyptian</h4>
              <div>
                <img src={arrow} alt="" />
                <img src={ellipse} alt="" />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor pur
            </p>
            <aside>
              <div>
                {/* <img src={} alt=""/>
                <img src={} alt=""/>
                <img src={} alt=""/>
                <img src={} alt=""/>
                <img src={} alt=""/> */}
              </div>
              <b>64 major creators</b>
            </aside>
          </div>
        </aside>

        {/* section2 */}

        <aside>
          <div>
            <div>
              <img src={areWeThereYet} alt="" />
              <h4>Boolean Egyptian</h4>
              <div>
                <img src={arrow} alt="" />
                <img src={ellipse} alt="" />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor pur
            </p>
            <aside>
              <div>
                {/* <img src={} alt=""/>
              <img src={} alt=""/>
              <img src={} alt=""/>
              <img src={} alt=""/>
              <img src={} alt=""/> */}
              </div>
              <b>64 major creators</b>
            </aside>
          </div>
        </aside>

        {/* section3  */}

        <aside>
          <div>
            <div>
              <img src={oloibori} alt="" />
              <h4>Boolean Egyptian</h4>
              <div>
                <img src={arrow} alt="" />
                <img src={ellipse} alt="" />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor pur
            </p>
            <aside>
              <div>
                {/* <img src={} alt=""/>
              <img src={} alt=""/>
              <img src={} alt=""/>
              <img src={} alt=""/>
              <img src={} alt=""/> */}
              </div>
              <b>64 major creators</b>
            </aside>
          </div>
        </aside>
      </article>
    </section>
  );
}
