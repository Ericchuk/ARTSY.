import message from "../img/Vector (5).png";
import locator from "../img/Vector (6).png";
import footerImage from "../img/Rectangle 299.png";
import "./cssfile/footer.css";

export default function Footer() {
  return (
    <footer>
      <aside className="footer-aside-1">
        <div>
          <h2>TOP CREATORS OF THE WEEK</h2>
          <ul>
            {window.innerWidth > 699 ? (
              <div className="indicator-container">
                <div className="indicator"></div>
              </div>
            ) : (
              ""
            )}
            <ul>
              <li>Editorials</li>
              <li>Fashion</li>
              <li>Life</li>
              <li>Blueprint</li>
            </ul>
          </ul>
        </div>

        <p>
          “Everything always looked better in black and white. Everything always
          as if it were the first time; there’s always more people in a black
          and white photograph. It just makes it seem that there were more
          people at a gig, more people at a football match, than with colour
          photography. Everything looks more exciting.”– Jack Lowden
        </p>
        <h3>CIRCA</h3>
        <h2 className="numb">1985</h2>
        <img src={footerImage} alt="monalisa" />
      </aside>
      <aside className="newletter">
        <header>
          <h2>NEWSLETTER</h2>
          <p>SUBSCRIBE TO OUR DAILY UPDATES AND NEWSLETTERS</p>
          <input type="email" placeholder="enter your email here" />
          <button>subscribe</button>
          <h4>Reach us</h4>
        </header>
        <aside>
          {window.innerWidth > 699 ? (
            <div className="desk-footer">
              <h2>ARTSY.</h2>
              <ul>
                <a href="#">
                  <li>Home</li>
                </a>
                <a href="#">
                  <li>Marketplace</li>
                </a>
                <a href="#">
                  <li>Auctions</li>
                </a>
                <a href="#">
                  <li>Drops</li>
                </a>
              </ul>
              <ul>
                <a href="#">
                  <li>Blog</li>
                </a>
                <a href="#">
                  <li>Wallets</li>
                </a>
                <a href="#">
                  <li>Rates</li>
                </a>
                <a href="#">
                  <li>High bids</li>
                </a>
              </ul>
            </div>
          ) : (
            ""
          )}
          <div>
            <div>
              <img src={message} alt="gmail" />
              <p>artsystudios@gmail.com</p>
            </div>
            <div>
              <img src={locator} alt="locator" />
              <p>Lagos, NIgeria</p>
            </div>
          </div>
        </aside>
      </aside>

      <p className="copyright">Artsystudios &copy; 2022. All Right Reserved</p>
    </footer>
  );
}
