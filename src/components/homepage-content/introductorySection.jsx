import back from "../img/Rectangle 240.png";
import center from "../img/Rectangle 241.png";
import front from "../img/Rectangle 242.png";
import first from "../img/Rectangle 230 (2).png";
import second from "../img/Rectangle 231.png";
import third from "../img/Rectangle 232.png";
import fourth from "../img/Rectangle 233.png";
import "./cssfile/introductorySection.css";

export default function Banner1() {
  return (
    <section className="section">
      <h3>Photography is poetry  {window.innerWidth > 699 ? "&": "and"} beautiful untold stories</h3>
      <p>
        Flip through more than 10,000 vintage shots,old photographs, historic
        images and captures seamlessly in one place. Register to get top access.
      </p>
      {window.innerWidth > 699 ? (
        <aside className="desktop-view">
          <img src={first} alt="girl" className="im" />
          <img src={second} alt="landscape" className="im" />
          <img src={third} alt="girl" className="img3girl" />
          <img src={fourth} alt="kangaroo" className="img4" />
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
