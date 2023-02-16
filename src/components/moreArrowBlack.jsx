import arrow from "./img/Vector (12).png";
import ellipse from "./img/Ellipse 58.png";
import './cssfiles/moreArrowBlack.css'

export default function More({next}) {
  return (
    <div className="arrow-container-black" onClick={next}>
      <img src={arrow} alt="" className="arrow-black" />
      <img src={ellipse} alt="" />
    </div>
  );
}
