import message from "./img/Vector (5).png";
import locator from "./img/Vector (6).png";
import "./cssfiles/footer.css";

export default function Footer() {

  return (
    <footer>
      
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
                <a href="/">
                  <li>Home</li>
                </a>
                <a href="/marketplace">
                  <li>Marketplace</li>
                </a>
                <a href="/auction">
                  <li>Auctions</li>
                </a>
                <a href="/drop">
                  <li>Drops</li>
                </a>
              </ul>
              <ul>
                <a href="blogs">
                  <li>Blog</li>
                </a>
                <a href="wallets">
                  <li>Wallets</li>
                </a>
                <a href="rates">
                  <li>Rates</li>
                </a>
                <a href="bids">
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
