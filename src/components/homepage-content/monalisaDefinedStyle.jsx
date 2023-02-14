import ellipse from "../img/Ellipse 6.png";
import backImage from "../img/Rectangle 239.png";
import backImageDesktop from "../img/Rectangle 91 (1).png";
import arrow4ward from "../img/Vector (9).png";
import arrowBackward from "../img/Vector (8).png";
import "./cssfile/monalisaDefinedStyle.css";

export default function MonalisaStyle() {
  return (
    <section className="monalisa-style">
      {window.innerWidth > 699 ? (
        <h4>See Upcoming Auctions and Exhibitions</h4>
      ) : (
        ""
      )}
      {window.innerWidth < 699 ? (
        <img src={backImage} alt="background" className="backImage" />
      ) : (
        <img src={backImageDesktop} alt="background" className="backImage" />
      )}
      <aside className="monalisa">
        <img src={ellipse} alt="sun" />
        <h4>MONALISA REDEFINED IN STYLE.</h4>
      </aside>
      <aside className="o1">
        <div>
          <h3>01</h3>
          <p>Start on : 08:00 GTS . Monday </p>
        </div>

        <div className="p-container">
          <div className="p">
            <p>
              GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
              INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST
              AND LOWEST BIDS.
            </p>
          </div>

          <div className="see-more">
            <a href="see more">See more</a>
            <button>Set a reminder</button>
          </div>
        </div>
      </aside>

      {window.innerWidth > 699 ? (
        <div className="progress-container">
          <div className="progress-bar" id="myBar">
            <div className="progress-indicator" id="myBar2"></div></div>
          <div className="arrows">
            <img src={arrowBackward} alt="arrowBackward" />
            <img src={arrow4ward} alt="arrowForward" />
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
