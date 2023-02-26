import metamask from "../img/MetaMask - jpeg.png";
import coinbase from "../img/Coinbase - png.png";
import walletconnect from "../img/WalletConnect - jpeg.png";
import phantom from "../img/Phantom - jpeg.png";
import more from "../img/Vector (30).png";
import padlock from "../img/Vector (31).png";
import "./cssfile/walletType.css";

export default function WalletType() {
  const wallets = [
    {
      id: 0,
      img: metamask,
    },
    {
      id: 1,
      img: coinbase,
    },
    {
      id: 2,
      img: walletconnect,
    },
    {
      id: 3,
      img: phantom,
    },
    {
      id: 4,
      img: more,
    },
  ];

  const wallet = wallets.map((each) => {
    return (
      <div className="wallet" key={each.id}>
        <img src={each.img} alt="wallet" />
      </div>
    );
  });
  return (
    <section className="wallet-type">
      {window.innerWidth < 700 ? (
        <div className="secured">
          <img src={padlock} alt="secured" />
          <p>Secure server</p>
        </div>
      ) : (
        <div className="desk-secured">
          <div>
            <img src={padlock} alt="secured" />
            <p>Secure server</p>
          </div>
          <b>Payment method</b>
        </div>
      )}

      <div className="wallet">
        <input type="radio" name="wallet" id="wallet" />
        <label htmlFor="wallet">Select your Wallet</label>
      </div>
      <p>
        Connect with one of our available wallet providers or add and connect a
        new wallet.
      </p>
      <div className="wallets">{wallet}</div>
    </section>
  );
}
